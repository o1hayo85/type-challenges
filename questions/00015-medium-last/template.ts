type Last<T extends any[]> = T extends [...infer Rest, infer P] ? P : never
