import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title};
  color: ${({ theme }) => theme.colors.tertiary};
  text-transform: uppercase;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.typography.extraLarge};
  }
`;

export const Box = styled.div`
  height: 85vh;
  .slick-list,
  .slick-slider {
    height: 100% !important;
  }
`;

export const ServicesContainer = styled.div`
  width: 80vw;
  height: 80vh;
  margin-left: 10vw;
  display: flex;
  margin-left: 20%;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-left: 10%;
    height: 100vh;
  }

  @media (min-width: 900px) {
    &:not(:last-child) {
      height: 100vh;
    }
  }
`;

export const TitleWrapper = styled.div`
  margin: 3rem 0 0 0;

  @media (max-width: 425px) {
    margin: 2rem 0 0 0;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  top: 100px;
  left: -20rem;

  @media (max-width: 900px) {
    position: initial;
    margin-bottom: 3rem;

    img {
      width: 8rem;
    }
  }
`;

export const Content = styled.div`
  width: 40%;
  font-size: ${({ theme }) => theme.typography.small};

  @media (max-width: 900px) {
    width: auto;
  }

  p {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Scroll = styled.img`
  width: 10rem;
  position: fixed;
  bottom: 7rem;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const SecContent = styled.div`
  width: 40%;
  margin-top: 42rem;
  font-size: ${({ theme }) => theme.typography.small};
  margin-left: 6rem;

  @media (max-width: 900px) {
    width: auto;
    margin-top: 5rem;
    margin-left: 0;
  }

  @media (max-width: 425px) {
    margin-top: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
