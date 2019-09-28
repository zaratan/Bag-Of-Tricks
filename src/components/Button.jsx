import styled from 'styled-components';
import React from 'react';

const ActionButton = styled.button`
  width: 90%;
  padding: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${props => (props.enabled ? 'green' : 'blue')};
  margin: 0 auto;
  opacity: 0.9;
  :focus {
    outline: none;
  }
  :hover {
    opacity: 1;
  }
`;

const ListElement = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = ({ children, action, active }) => {
  const actionWithKey = event => {
    if (event.keyCode && (event.keyCode !== 13 && event.keyCode !== 32)) return;
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
