import fetch from 'isomorphic-fetch';

export const updateProject = async (id: number, displayName: string) => {
  const data = { displayName };
  const res = await fetch(`http://localhost:4000/api/projects/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw res;
};
