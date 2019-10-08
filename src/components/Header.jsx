import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 7px;
  padding-bottom: 4px;
  background-color: ${props => props.theme.base0};
`;

const Text = styled.span`
  color: white;
  font-size: 2rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Text>Bag of Tricks ✨</Text>
    </HeaderContainer>
  );
}
