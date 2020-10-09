// @flow
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import HighlightDiv from './HighlightDiv';
import Header from './Header';
import { baseTheme } from '../styles/theme';
import ReactivateSelect from './ReactivateSelect';

const ActionList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 7px;
  background-color: #eee;
`;

export default function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Header />
      <ActionList>
        <HighlightDiv />
        <ReactivateSelect />
      </ActionList>
    </ThemeProvider>
  );
}
