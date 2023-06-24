import { z } from 'zod'

type TypeToZodShape<T> = [T] extends [
  string | number | boolean | undefined | null
] ? z.Schema<T> : {
  [K in keyof T]: TypeToZodShape<T[K]>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const schemaBuilder = <TType extends Record<string, any>>() => {
  return <TShape extends TypeToZodShape<TType>>(shape: TShape): z.ZodObject<TType> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return z.object(shape as any) as any
  }
}