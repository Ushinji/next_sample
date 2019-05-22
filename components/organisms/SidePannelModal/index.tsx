import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #000000;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  opacity: 0.6;
  width: 100%;
  height: 100%;
`;

type Props = {
  children: React.ReactNode;
};

const SidePannelModal: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SidePannelModal;
