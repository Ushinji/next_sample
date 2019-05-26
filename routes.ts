/* eslint-disable @typescript-eslint/no-var-requires */
const nextRoutes = require('next-routes');

const routes = nextRoutes()
  .add('Top', '/')
  .add('ProjectList', '/projects')
  .add('ProjectDetail', '/projects/:id');

export default routes;
