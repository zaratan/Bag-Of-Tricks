// @flow
import React from 'react';
import styled from 'styled-components';
import HighlightDiv from './HighlightDiv';
import Header from './Header';

const ActionList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 7px 0;
`;

export default function App() {
  return (
    <>
      <Header />
      <ActionList>
        <HighlightDiv />
      </ActionList>
    </>
  );
}
