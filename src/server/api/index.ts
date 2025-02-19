import { treaty } from "@elysiajs/eden";
import { swagger } from "@elysiajs/swagger"
import { Elysia } from "elysia";
import { headers as getNextHeaders } from "next/headers";
import betterAuthView from "../auth/auth-view";
import { fileRouter } from "./routers/file";
import { userRouter } from "./routers/user";
import { bathRouter } from "./routers/bath";
import { requestRouter } from "./routers/request";
import { ApiErrorLogger } from "./middleware/logger";

export const app = new Elysia({ prefix: "/api" })
  .onTransform(ApiErrorLogger)
  .onError(ApiErrorLogger)
  .use(swagger())
  .use(userRouter)
  .all("/auth/*", betterAuthView)
  .use(fileRouter)
  .use(bathRouter)
  .use(requestRouter)

export type App = typeof app;

export const { api } = treaty(app);

export async function headers(): Promise<Record<string, string | undefined>> {
  const h = await getNextHeaders();
  const headers: Record<string, string | undefined> = {};
  for (const [key, value] of h.entries()) {
    headers[key] = value;
  }
  return headers;
}
