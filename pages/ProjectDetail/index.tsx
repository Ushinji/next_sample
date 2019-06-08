import * as React from 'react';
import { NextFC, NextContext } from 'next';
import Link from 'next/link';
import { getProject, Project } from '@/queries/projectQuery';

type Props = {
  notFound: boolean;
  error: boolean;
  project?: Project;
};

type ProjectPageContext = NextContext<{ id: string }>;

const ProjectDetail: NextFC<Props, {}, ProjectPageContext> = ({
  notFound,
  error,
  project,
}) => {
  if (notFound) return <div>Project Not Found</div>;
  if (error || !project) return <div>Error</div>;

  return (
    <div>
      <h2>ProjectDetailPage</h2>
      <ul>
        <li>{`id: ${project.id}`}</li>
      </ul>
      <Link href="/projects">
        <a>戻る</a>
      </Link>
    </div>
  );
};

ProjectDetail.getInitialProps = async ({
  query,
}: ProjectPageContext): Promise<Props> => {
  const id = parseInt(query.id, 10);
  const res = await getProject(id);
  return { ...res };
};

export default ProjectDetail;
