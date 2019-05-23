import * as Router from 'koa-router';
import RootController from '../controller/root_controller';
import ProjectController from '../controller/project_controller';

const router = new Router();
router.get('/', RootController.getRootPage);
router.get('/api/projects/:id', ProjectController.getProject);

export default router;
