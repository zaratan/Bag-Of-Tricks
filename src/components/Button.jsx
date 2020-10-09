// @flow

import styled, { type StyledComponent } from 'styled-components';
import React from 'react';
import type { Node } from 'react';
import type { themeType } from '../styles/theme';

const ActionButton: StyledComponent<
  { enabled: boolean },
  themeType,
  HTMLButtonElement
> = styled.button`
  width: 90%;
  padding: 7px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  background-color: ${({ enabled, theme }) =>
    enabled ? theme.highlight : theme.lightAccent};
  margin: 0.2rem auto;
  opacity: 0.9;
  :focus {
    outline: none;
  }
  :hover {
    opacity: 1;
  }
`;

const ListElement: StyledComponent<{}, themeType, HTMLLIElement> = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = ({
  children,
  action,
  active,
}: {
  children: Node,
  action: (SyntheticEvent<HTMLButtonElement>) => void,
  active: boolean,
}) => {
  const actionWithKey = (event: SyntheticKeyboardEvent<HTMLButtonElement>) => {
    if (event.keyCode && event.keyCode !== 13 && event.keyCode !== 32) return;
    action(event);
  };
  return (
    <ListElement>
      <ActionButton
        onClick={action}
        onKeyDown={actionWithKey}
        type="button"
        enabled={active}
      >
        {children}
      </ActionButton>
    </ListElement>
  );
};

export default Button;
