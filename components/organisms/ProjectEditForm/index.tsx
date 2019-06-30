import * as React from 'react';
import { Project } from '@/queries/projectQuery';
import { updateProject } from '@/commands/projectCommand';

const useProjectEditForm = (project: Project) => {
  const [displayName, setDisplayName] = React.useState(project.displayName);

  const onSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (displayName) {
        await updateProject(project.id, displayName);
      }
    },
    [displayName, updateProject]
  );

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDisplayName(event.target.value);
    },
    [setDisplayName]
  );

  return {
    displayNameInputParams: {
      value: displayName,
      onChange,
    },
    onSubmit,
  };
};

type Props = {
  project: Project;
};

const ProjectEditForm: React.FC<Props> = ({ project }) => {
  const { displayNameInputParams, onSubmit } = useProjectEditForm(project);
  return (
    <div>
      <h2>プロジェクト編集フォーム</h2>
      <form onSubmit={onSubmit}>
        <input {...displayNameInputParams} />
        <button type="submit">変更する</button>
      </form>
    </div>
  );
};

export default ProjectEditForm;
