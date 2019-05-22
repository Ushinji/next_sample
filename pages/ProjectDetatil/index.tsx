import * as React from 'react';
import { NextFC, NextContext } from 'next';
import styled from 'styled-components';
import SidePannelModal from '@/components/organisms/SidePannelModal';
import { getProject, Project } from '@/queries/projectQuery';
import useBool from '@/lib/useBool';

const Container = styled.div``;

type Props = {
  project: Project;
};

type ProjectPageContext = NextContext<{ id: string }>;

const ProjectDetatil: NextFC<Props, {}, ProjectPageContext> = ({ project }) => {
  const [isOpen, open, close] = useBool(false);
  return (
    <Container>
      <h2>ProjectDetailPage</h2>
      <ul>
        <li>{`id: ${project.id}`}</li>
        <li>{`displayName: ${project.displayName}`}</li>
      </ul>
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
    </Container>
  );
};

ProjectDetatil.getInitialProps = async ({
  query,
}: ProjectPageContext): Promise<Props> => {
  const id = parseInt(query.id, 10);
  const project = await getProject(id);
  return { project };
};

export default ProjectDetatil;
