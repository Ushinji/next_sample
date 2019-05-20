import { BaseContext } from 'koa';
import ProjectRepository from '../repositories/ProjectRepository';

class ProjectController {
  public static async getProject(ctx: BaseContext) {
    const id = parseInt(ctx.params.id, 10);
    const projectEntity = ProjectRepository.getProject(id);

    if (projectEntity) {
      ctx.status = 200;
      ctx.body = projectEntity.toJson();
    } else {
      ctx.status = 404;
    }
  }
}

export default ProjectController;
