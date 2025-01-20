import Elysia from "elysia";
import { userService } from "./user";
import { db } from "~/server/db";
import { RequestSchema } from "~/lib/shared/types/requests";
import { requests } from "~/server/db/schema";

export const requestRouter = new Elysia({prefix:"/request"})
.use(userService)

.get("/",
  async () => {
    return await db.query.requests.findMany()
  },
  {
    isAdmin:true
  })

.post(
  "/create",
  async ({body, ...req}) => {
    return ((await db.insert(requests)
      .values({
        ...body
      })
      .returning())[0] || [])
      
  },
  {
    body:RequestSchema,
  }
)
