import * as React from 'react';
import { NextFC, NextContext } from 'next';
import styled from 'styled-components';
import SidePannelModal from '@/components/organisms/SidePannelModal';
import { getProject, Project } from '@/queries/projectQuery';
import useBool from '@/lib/useBool';
import Link from 'next/link';
import { updateProject } from '@/commands/projectCommand';

const Container = styled.div``;

type Props = {
  project: Project;
};

type ProjectPageContext = NextContext<{ id: string }>;

const useEditProjectForm = (project: Project) => {
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

const ProjectDetail: NextFC<Props, {}, ProjectPageContext> = ({ project }) => {
  const [isOpen, open, close] = useBool(false);
  const { displayNameInputParams, onSubmit } = useEditProjectForm(project);
  return (
    <Container>
      <h2>ProjectDetailPage</h2>
      <ul>
        <li>{`id: ${project.id}`}</li>
      </ul>
      <form onSubmit={onSubmit}>
        <input {...displayNameInputParams} />
        <button type="submit">編集する</button>
      </form>

      <button type="button" onClick={open}>
        モーダルを開く
      </button>
      {isOpen ? (
        <SidePannelModal>
          <button type="button" onClick={close}>
            モーダルを閉じる
          </button>
        </SidePannelModal>
      ) : null}
      <div>
        <Link href="/projects">
          <a>戻る</a>
        </Link>
      </div>
    </Container>
  );
};

ProjectDetail.getInitialProps = async ({
  query,
}: ProjectPageContext): Promise<Props> => {
  const id = parseInt(query.id, 10);
  const project = await getProject(id);
  return { project };
};

export default ProjectDetail;
