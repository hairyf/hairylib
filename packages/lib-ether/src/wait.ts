/* eslint-disable ts/ban-ts-comment */
import type { TransactionReceipt } from 'ethers'
import { ContractTransactionResponse, TransactionResponse } from 'ethers'
import mitt from 'mitt'

const emitter = mitt<{
  before: void
  after: TransactionReceipt | null
  error: Error
}>()

for (const Response of [TransactionResponse, ContractTransactionResponse]) {
  const waitForTransaction = Response.prototype.wait
  // @ts-ignore
  Response.prototype._wait = waitForTransaction
  Response.prototype.wait = async function (...args: any[]) {
    try {
      emitter.emit('before')
      const receipt = await waitForTransaction.call(this, ...args)
      emitter.emit('after', receipt)
      return receipt
    }
    catch (error: any) {
      emitter.emit('error', error)
      throw error
    }
  }
}

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
    // @ts-ignore
    const receipt = await transaction.getTransaction().then(transaction => transaction?._wait())
    emitter.emit('after', receipt)
    return receipt
  }
  catch (error: any) {
    emitter.emit('error', error)
    throw error
  }
}

export const subscribeForTransaction = emitter.on.bind(emitter)
