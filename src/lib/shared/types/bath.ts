import { Static, t } from "elysia";

export const BathhouseSchema = t.Object({
  name:t.String(),
  price:t.Number(),
  images:t.Array(t.File()),
})

export type TBathhouseSchema = Static<typeof BathhouseSchema>

