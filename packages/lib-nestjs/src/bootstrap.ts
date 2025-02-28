/* eslint-disable no-extend-native */
import type { INestApplication } from '@nestjs/common'
import { Logger } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Decimal } from '@prisma/client/runtime/library'
import BigNumber from 'bignumber.js'
import { FetchRequest } from 'ethers'
import type { ProxyOptions } from 'tunnel'
import { httpsOverHttp } from 'tunnel'
import { bold, gray } from 'chalk'

export function withNestjsRepairDecimal(_app: INestApplication) {
  Object.defineProperty(Decimal.prototype, 'toString', {
    get() { return () => new BigNumber(this.toHex()).toFixed() },
  })
  Object.defineProperty(Decimal.prototype, 'toJSON', {
    get() { return () => new BigNumber(this.toHex()).toFixed() },
  })

  Object.defineProperty(BigInt.prototype, 'toJSON', {
    get() { return () => String(this) },
  })
}

export function withNestjsSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('geoscriptions')
    .setDescription('geoscriptions api')
    .setVersion('1.0.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('swagger/website', app, document, {
    jsonDocumentUrl: 'swagger/json',
  })
}

export function withNestjsCors(app: INestApplication) {
  app.enableCors()
}

export function withNestjsListen(app: INestApplication, port: string | number) {
  const logger = new Logger()
  app.listen(port).then(() => {
    logger.log(`${bold('Listening on:')} ${gray(`http://127.0.0.1:${port}`)}`)
    logger.log(`${bold('Environments:')} ${gray('.env')}`)
  })
}

export function withEthersHttpProxy(options: ProxyOptions) {
  const agent = httpsOverHttp({
    proxy: options,
  })

  // register as an ethers agent
  const fetchRequest = FetchRequest.createGetUrlFunc({ agent })
  FetchRequest.registerGetUrl(fetchRequest)

  // register as an global agent
  // TODO
}
