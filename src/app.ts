import * as Koa from "koa";

const app = new Koa();

app.use((ctx: Koa.Context) => {
  ctx.body = "Hello Koa !!!";
});

app.listen(process.env.PORT || 4000);
