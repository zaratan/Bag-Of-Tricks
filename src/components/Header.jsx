import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 7px;
`;

const Text = styled.span`
  font-size: 2rem;
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Text>Bag of Tricks ✨</Text>
    </HeaderContainer>
  );
}
