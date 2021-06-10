import styled from 'styled-components';

export const InfoContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;

  width: 100%;

  p {

    &:first-of-type {
      margin-bottom: 1rem;
    }

    &:not(:first-of-type) {
      display: inline-block;
      margin-right: 3rem;
    }
  }
`;
