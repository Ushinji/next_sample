import fetch from 'isomorphic-fetch';

export type Project = {
  id: number;
  displayName: string;
};

export const getProject = async (id: number) => {
  const res = await fetch(`http://localhost:4000/api/projects/${id}`);
  return (await res.json()) as Project;
};
