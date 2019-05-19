import { BaseContext } from "koa";

class RootController {
  public static async getRootPage(ctx: BaseContext) {
    ctx.status = 200;
    ctx.body = "### RootController.getRootPage ###";
  }
}

export default RootController;
