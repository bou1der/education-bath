import Elysia, { error, t } from "elysia";
import { userService } from "./user";
import { db } from "~/server/db";
import { BathhouseSchema } from "~/lib/shared/types/bath";
import { api } from "..";
import { bathhouses } from "~/server/db/schema";
import { IdSchema } from "~/lib/shared/types/utils";
import { eq } from "drizzle-orm";

export const bathRouter = new Elysia({prefix:"/bath"})
.use(userService)

.get("/",
  async () => {
    return await db.query.bathhouses.findMany()
  })

.get(
  "/:id",
  async ({params}) => {

    const bathhouse = (await db.select()
      .from(bathhouses)
      .where(eq(bathhouses.id, params.id))
      .limit(1)
    )

    if(!bathhouse){
      return error(404, "Баня не найдена")
    }

    return bathhouse
  },
  {
    params:IdSchema
  }
)

.post(
  "/create",
  async ({body, ...req}) => {
    let ids:string[] | null = null

    if(body.images.length !== 0){
      ids = (await Promise.all(
        body.images.map(async (file) => {
          return (await api.file.index.post({
            file
          }, {
              headers:req.headers,
              query:{
                isImage:true
              }
            })).data?.id
        })
      ))
      .filter((id) => id !== undefined)
    }

    return (await db.insert(bathhouses)
      .values({
        ...body,
        imageIds: ids ? [...ids] : [],
      })
      .returning())[0]!
  },
  {
    body:BathhouseSchema,
    isAdmin:true,
  }
)

.post(
  "/update",
  async ({body, ...req}) => {

    const [bathhouse] = await db.select()
      .from(bathhouses)
      .where(eq(bathhouses.id, body.id))
      .limit(1)

    if(!bathhouse){
      return error(404, "Не найдено")
    }

    let ids:string[] | null = null

    if(body.images.length !== 0){
      ids = (await Promise.all(
        body.images.map(async (file) => {
          return (await api.file.index.post({
            file
          }, {
              headers:req.headers,
              query:{
                isImage:true
              }
            })).data?.id
        })
      ))
      .filter((id) => id !== undefined)
    }

    return (await db.update(bathhouses)
      .set({
        ...body,
        imageIds:ids || []
      })
      .where(eq(bathhouses.id, bathhouse.id))
      .returning()
    )[0]!
  },
  {
    isAdmin:true,
    body:t.Intersect([BathhouseSchema, IdSchema])
  }
)
