import * as React from 'react';
import { NextFC, NextContext } from 'next';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import { Project } from '@/queries/projectQuery';
import useBool from '@/lib/useBool';

const { useState, useEffect } = React;

const useProject = (id: number) => {
  useBool(true);
  const [project, setProject] = useState<Project>();
  const [isLoading, startLoading, finishLoading] = useBool(false);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      startLoading();
      const res = await fetch(`http://localhost:4000/api/projects/${id}`);
      finishLoading();

      if (res.status === 404) {
        setNotFound(true);
        return;
      }

      if (!res.ok) {
        setError(true);
        return;
      }

      const fetchedProject = (await res.json()) as Project;
      setProject(fetchedProject);
    };

    fetchProject();
  }, [id]);

  return { project, isLoading, notFound, error };
};

type Props = {
  id: number;
};

type ProjectPageContext = NextContext<{ id: string }>;

const ProjectDetail: NextFC<Props, {}, ProjectPageContext> = ({ id }) => {
  const { project, isLoading, notFound, error } = useProject(id);

  if (isLoading) return <div>Loading...</div>;
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
