// @flow strict
/* eslint-disable no-param-reassign */
import type { Context } from "koa";

import markup from "./markup";

async function app(ctx: Context) {
  ctx.status = 200;
  ctx.type = "text/html; charset=utf-8";
  ctx.body = markup(ctx.url);
}

export default app;
