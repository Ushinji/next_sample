class ProjectEntity {
  public id: number;

  public displayName: string;

  public constructor(id: number, displayName: string) {
    this.id = id;
    this.displayName = displayName;
  }

  public toJson() {
    return {
      id: this.id,
      displayName: this.displayName,
    };
  }
}

export default ProjectEntity;
