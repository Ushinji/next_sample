import * as React from 'react';
import { NextFC } from 'next';
import Link from 'next/link';
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
          return (
            <li key={key}>
              <Link href={`/projects/${project.id}`}>
                <a>{project.displayName}</a>
              </Link>
            </li>
          );
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
