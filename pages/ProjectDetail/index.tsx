import * as React from 'react';
import { NextFC, NextContext } from 'next';
import Link from 'next/link';
import { useProject } from '@/queries/projectQuery';

type Props = {
  id: number;
};

type ProjectPageContext = NextContext<{ id: string }>;

const ProjectDetail: NextFC<Props, {}, ProjectPageContext> = ({ id }) => {
  const { project, loading, notFound, error } = useProject(id);

  if (loading) return <div>Loading...</div>;
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
  return { id };
};

export default ProjectDetail;
