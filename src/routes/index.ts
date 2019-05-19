import * as Router from "koa-router";
import RootController from "../controller/root_controller";

const router = new Router();
router.get("/", RootController.getRootPage);

export default router;
