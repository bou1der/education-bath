import { Static, t } from "elysia";


export const RequestSchema = t.Object({
  name:t.String({maxLength:255}),
  phone:t.RegExp(/^(?:\+7|7|8)?\s*\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/),
})

// export type TBathhouseSchema = Static<typeof BathhouseSchema>

