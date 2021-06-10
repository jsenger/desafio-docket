import styled from 'styled-components';

export const InfoContainer = styled.section`
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
