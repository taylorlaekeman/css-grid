import React from 'react';
import styled from 'styled-components';

const colour = 'hsl(0, 0%, 20%)';

const Container = styled.main`
  box-sizing: border-box;
  display: grid;
  height: 100vh;
  width: 100vw;
`;

const Block = styled.article`
  grid-area: ${props => props.area};
  border: solid ${colour} 1px;
  color: ${colour};
  text-align: center;
`;

const App = () => (
  <Container>
  </Container>
);

export default App;
