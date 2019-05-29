import * as Router from 'koa-router';
import RootController from '../controller/root_controller';
import ProjectController from '../controller/project_controller';

const router = new Router();
router.get('/', RootController.getRootPage);
router.get('/api/projects/:id', ProjectController.getProject);
router.options('/api/projects/:id');
router.put('/api/projects/:id', ProjectController.updateProject);
router.get('/api/projects', ProjectController.getProjects);

export default router;
