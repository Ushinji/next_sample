import * as React from 'react';
import { NextFC } from 'next';
import { getProjects, Project } from '@/queries/projectQuery';

type Props = {
  projects: Project[];
};

const ProjectList: NextFC<Props> = ({ projects }) => {
  return (
    <div>
      <h2>プロジェクト一覧ページ</h2>
      <ul>
        {projects.map(project => {
          const key = `project-list-key-${project.id}`;
          return <li key={key}>{project.displayName}</li>;
        })}
      </ul>
    </div>
  );
};

ProjectList.getInitialProps = async (): Promise<Props> => {
  const projects = await getProjects();
  return { projects };
};

export default ProjectList;
