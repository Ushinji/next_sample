import * as React from 'react';
import { NextFC, NextContext } from 'next';

type Project = {
  id: number;
  displayName: string;
};

type Props = {
  project: Project;
};

type ProjectPageContext = NextContext<{ id: string }>;

const ProjectPage: NextFC<Props, {}, ProjectPageContext> = ({ project }) => {
  return (
    <div>
      <h2>ProjectDetailPage</h2>
      <ul>
        <li>{`id: ${project.id}`}</li>
        <li>{`displayName: ${project.displayName}`}</li>
      </ul>
    </div>
  );
};

ProjectPage.getInitialProps = async ({
  query,
}: ProjectPageContext): Promise<Props> => {
  const project: Project = {
    id: parseInt(query.id, 10),
    displayName: `TEST_PROJECT_${query.id}`,
  };
  return { project };
};

export default ProjectPage;
