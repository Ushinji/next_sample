import { BaseContext } from 'koa';
import ProjectRepository from '../repositories/ProjectRepository';

class ProjectController {
  public static async getProjects(ctx: BaseContext) {
    const projectEntities = ProjectRepository.findAll();

    ctx.status = 200;
    ctx.body = projectEntities.map(project => project.toJson());
  }

  public static async getProject(ctx: BaseContext) {
    const id = parseInt(ctx.params.id, 10);
    const projectEntity = ProjectRepository.findBy(id);

    if (projectEntity) {
      ctx.status = 200;
      ctx.body = projectEntity.toJson();
    } else {
      ctx.status = 404;
    }
  }

  public static async updateProject(ctx: BaseContext) {
    const id = parseInt(ctx.params.id, 10);
    const project = ProjectRepository.findBy(id);

    if (!project) {
      ctx.status = 404;
      return;
    }

    const requestBody = ctx.body;
    project.displayName = requestBody.displayName;

    ProjectRepository.update(project);

    ctx.status = 200;
    ctx.body = project.toJson();
  }
}

export default ProjectController;
