// @flow
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import HighlightDiv from './HighlightDiv';
import Header from './Header';
import { baseTheme } from '../styles/theme';

const ActionList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 7px;
  background-color: #eee;
`;

export default function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Header />
      <ActionList>
        <HighlightDiv />
      </ActionList>
    </ThemeProvider>
  );
}
