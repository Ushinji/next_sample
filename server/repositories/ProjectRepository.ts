import ProjectEntity from '../entities/project';

const projects = [
  {
    id: 1,
    displayName: 'TEST_PROJECT_1',
  },
  {
    id: 2,
    displayName: 'TEST_PROJECT_1',
  },
  {
    id: 3,
    displayName: 'TEST_PROJECT_3',
  },
];

class ProjectRepository {
  public static findBy(id: number) {
    const index = projects.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    const project = projects[index];
    return new ProjectEntity(project.id, project.displayName);
  }
}

export default ProjectRepository;
