import * as Koa from "koa";
import * as Router from "koa-router";
import RootController from "./controller";

const app = new Koa();

const router = new Router();
router.get("/", RootController.getRootPage);
app.use(router.routes());

app.listen(process.env.PORT || 4000);
