type Concat<T extends any[], U extends any[]> = T extends [...infer R] ? U extends [...infer E] ? [...R, ...E] : never : never
