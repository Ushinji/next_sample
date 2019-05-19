import * as Koa from "koa";
import router from "./routes";

const app = new Koa();

app.use(router.routes());
app.listen(process.env.PORT || 4000);
