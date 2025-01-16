import { treaty } from "@elysiajs/eden";
import { env } from "~/env";
import type { App } from "~/server/api";

// let origin = undefined;
//
// if (typeof window !== "undefined") {
//   origin = window.location.origin;
// }

export const { api } = treaty<App>(`${env.NEXT_PUBLIC_URL}`);
