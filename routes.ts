/* eslint-disable */
const nextRoutes = require('next-routes');
const routes = nextRoutes()
  .add('ProjectList', '/projects')
  .add('project', '/projects/:id');

export default routes;
