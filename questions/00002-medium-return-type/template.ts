type MyReturnType<T> = T extends (...arg: any) => infer R ? R : never
