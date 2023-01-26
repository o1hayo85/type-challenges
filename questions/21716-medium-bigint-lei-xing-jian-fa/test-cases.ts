import type { Equal, Expect } from '@type-challenges/utils'

type BigintOfString<N extends string> = N extends `${infer N extends bigint}` ? N : bigint
type Isuzu = '00000000000000000000000000000000000000000000000000'
type Repeated<N extends bigint, R extends string = '', D extends bigint = BigIntSubed<N, 1n>> = D extends -1n ? R : Repeated<D, `${R}${Isuzu}`>
type Isuzu20 = Repeated<20n>
type OneIsuzu20 = BigintOfString<`1${Isuzu20}`>
type TwoIsuzu20 = BigintOfString<`2${Isuzu20}`>

type cases = [
  Expect<Equal<BigIntSubed<0n, 1n>, -1n>>,
  Expect<Equal<BigIntSubed<3141592653589793238462n, 8888888888888888n>, 3141583764700904349574n>>,
  Expect<Equal<BigIntSubed<1234567890987654321n, -684426164679554915n>, 1918994055667209236n>>,
  Expect<Equal<BigIntSubed<-177155n, 5211314n>, -5388469n>>,
  Expect<Equal<BigIntSubed<-7355608n, -1597463174n>, 1590107566n>>,
  Expect<Equal<BigIntSubed<bigint, 0n>, bigint>>,
  Expect<Equal<BigIntSubed<BigIntSubed<TwoIsuzu20, 2n>, BigIntSubed<OneIsuzu20, 2n>>, OneIsuzu20>>
]
