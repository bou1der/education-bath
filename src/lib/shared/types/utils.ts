import { t } from "elysia";

export const IdSchema = t.Object({
  id: t
    .String({
      minLength:1
    })
})
