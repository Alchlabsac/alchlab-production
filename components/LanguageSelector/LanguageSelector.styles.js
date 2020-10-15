import styled from 'styled-components';

export const Lang = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LangSelect = styled.div`
  z-index: 1000;

  button {
    border: none;
    transition: all 0.3s;
    transform-origin: 50% 50%;
  }

  button:hover {
    transform: scale(1.2);
  }

  button:focus {
    outline: none;
  }
`;

export const LangButton = styled.button`
  background-image: url('/assets/svg/icon-lang.svg');
  width: 40px;
  height: 40px;
  background-size: cover;
  background-color: transparent;
  cursor: pointer;
  filter: grayscale(50%);
  transition: all 0.5s;

  &:hover {
    filter: grayscale(30%);
  }
`;
