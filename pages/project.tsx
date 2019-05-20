import * as React from 'react';
import { NextFC, NextContext } from 'next';
import { getProject, Project } from '../queries/projectQuery';

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
  const id = parseInt(query.id, 10);
  const project = await getProject(id);
  return { project };
};

export default ProjectPage;
