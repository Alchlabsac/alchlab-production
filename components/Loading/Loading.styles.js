import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const LoadingText = styled.div`
  font-size: 30px;

  @keyframes blink {
    0% {
      color: ${({ theme }) => theme.colors.primary};
    }

    20% {
      opacity: ${({ theme }) => theme.colors.tertiary};
    }

    100% {
      opacity: ${({ theme }) => theme.colors.primary};
    }
  }

  span {
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
