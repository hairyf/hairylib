import type { StructValues } from './struct'
import type { DeepPartial } from './utils'

export type DefaultValues<Values extends StructValues> = Values extends AsyncDefaultValues<Values> ? DeepPartial<Awaited<Values>> : DeepPartial<Values>
export type AsyncDefaultValues<Values extends StructValues> = (payload?: unknown) => Promise<Values>
