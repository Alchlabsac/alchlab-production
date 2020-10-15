import styled from 'styled-components';

const RespHeaderElem = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 50%;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.transparentWhite};
  transform: translateX(-50%);
  border-radius: 5rem;
  padding: 1rem 2rem;
  z-index: 1000;

  img:not(:first-child) {
    width: 4rem;
    height: 4rem;
  }
  svg {
    fill: black;
  }

  @media (min-width: 901px) {
    display: none;
  }
`;

export default RespHeaderElem;
