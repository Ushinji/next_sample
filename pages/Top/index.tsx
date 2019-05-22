import * as React from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/Button';

const Container = styled.div``;
const H1 = styled.h1``;
const P = styled.p``;

const Top = () => {
  return (
    <Container>
      <H1>TopPage</H1>
      <P>Next.js sample application.</P>
      <Button>ぼたん</Button>
    </Container>
  );
};

export default Top;
