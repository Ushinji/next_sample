import fetch from 'isomorphic-fetch';
import { useState, useEffect, useCallback } from 'react';

export type Project = {
  id: number;
  displayName: string;
};

export const getProject = async (id: number) => {
  const res = await fetch(`http://localhost:4000/api/projects/${id}`);
  return (await res.json()) as Project;
};

export const getProjects = async () => {
  const res = await fetch(`http://localhost:4000/api/projects`);
  return (await res.json()) as Project[];
};

type UseProjectState = {
  project?: Project;
  loading: boolean;
  error: boolean;
  notFound: boolean;
};

export const useProject = (id: number) => {
  const [state, setState] = useState<UseProjectState>({
    project: undefined,
    loading: false,
    error: false,
    notFound: false,
  });

  const setPartialState = useCallback(partialState => {
    setState(prevState => {
      const nextState = Object.assign({}, prevState, partialState);
      return nextState;
    });
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      setPartialState({ loading: true });
      const res = await fetch(`http://localhost:4000/api/projects/${id}`);

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
