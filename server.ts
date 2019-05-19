import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Next from 'next';
import routes from './routes';

const port = 3000;
const dev = process.env.NODE_DEV !== 'production';

const app = Next({ dev, quiet: true });

const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());

  server.listen(port);
});
