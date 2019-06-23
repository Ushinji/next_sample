import * as Router from 'koa-router';
import ProjectController from '../controller/project_controller';

const router = new Router();
router.get('/api/projects/:id', ProjectController.getProject);
router.put('/api/projects/:id', ProjectController.updateProject);
router.get('/api/projects', ProjectController.getProjects);

export default router;
