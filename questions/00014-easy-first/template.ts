type First<T extends any[]> = T extends [infer R, ...infer _] ? R : never
