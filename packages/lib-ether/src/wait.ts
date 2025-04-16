import type { ContractTransactionResponse, TransactionReceipt, TransactionResponse } from 'ethers'
import mitt from 'mitt'

const emitter = mitt<{
  before: void
  after: TransactionReceipt | null | undefined
  error: Error
}>()

export type GenericTransactionResponse = TransactionResponse | ContractTransactionResponse
  | Promise<TransactionResponse | ContractTransactionResponse>
  | (() => TransactionResponse | ContractTransactionResponse)
  | (() => Promise<TransactionResponse | ContractTransactionResponse>)

export async function wait(transaction: GenericTransactionResponse) {
  try {
    emitter.emit('before')
    if (typeof transaction === 'function')
      transaction = await transaction()
    if (transaction instanceof Promise)
      transaction = await transaction
    const receipt = await transaction.getTransaction().then(transaction => transaction?.wait())
    emitter.emit('after', receipt)
    return receipt
  }
  catch (error: any) {
    emitter.emit('after', null)
    emitter.emit('error', error)
    throw error
  }
}

wait.subscribe = emitter.on.bind(emitter)
