import * as React from 'react';
import { NextFC, NextContext } from 'next';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import { Project } from '@/queries/projectQuery';
import useBool from '@/lib/useBool';

const { useState, useEffect } = React;

type UseProjectState = {
  project?: Project;
  loading: boolean;
  error: boolean;
  notFound: boolean;
};

const useProject = (id: number) => {
  useBool(true);
  const [state, setState] = useState<UseProjectState>({
    project: undefined,
    loading: false,
    error: false,
    notFound: false,
  });

  const setPartialState = React.useCallback(partialState => {
    setState(prevState => {
      const nextState = Object.assign({}, prevState, partialState);
      return nextState;
    });
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      setPartialState({ loading: true });
      const res = await fetch(`http://localhost:4000/api/projects/${id}`, {
        mode: 'no-cors',
      });

      if (res.status === 404) {
        setPartialState({ notFound: true, loading: false });
        return;
      }

      if (!res.ok) {
        setPartialState({ error: true, loading: false });
        return;
      }

      const project = (await res.json()) as Project;
      setPartialState({
        project,
        error: false,
        loading: false,
        notFound: false,
      });
    };

    fetchProject();
  }, [id]);

  return { ...state };
};

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
