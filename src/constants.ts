import { Percent } from '@uniswap/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0x6777b71FC96Dd07E0562b7668320E2597e4ECfe2'

export const INIT_CODE_HASH = '0xaae7dc513491fb17b541bd4a9953285ddf2bb20a773374baecc88c4ebada0767'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)
