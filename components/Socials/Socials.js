import React from 'react';
import styled from 'styled-components';
import SocialItem from './SocialItem/SocialItem';
import SocialItems from './SocialItems';

const SocialList = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.typography.small};
  list-style: none;
  text-transform: uppercase;
  min-width: 33.3%;
    align-items: center;
    justify-content: center;

  @media (max-width: 900px) and (min-width: 750px) {
    font-size: ${({ theme }) => theme.typography.extraSmall};
    width: auto;
  }

  @media (max-width: 750px) {
    width: auto;
  }

  li {
    padding: 1rem;
  }
`;

const NavBar = () => {
  return (
    <SocialList>
      {SocialItems.map((item) => {
        return (
          <SocialItem key={item.link} link={item.link}>
            {item.name}
          </SocialItem>
        );
      })}
    </SocialList>
  );
};

export default NavBar;
