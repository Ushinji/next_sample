/* eslint-disable */
const nextRoutes = require('next-routes');
const routes = nextRoutes()
  .add('ProjectList', '/projects')
  .add('ProjectDetatil', '/projects/:id');

export default routes;
