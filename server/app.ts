import * as Koa from 'koa';
import * as cors from '@koa/cors';
import router from './routes';

const app = new Koa();

app.use(router.routes());

const corsOptions = {
  origin: 'http://localhost:3000',
  allowHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
};

app.use(cors(corsOptions));
app.listen(process.env.PORT || 4000);
