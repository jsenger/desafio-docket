import styled from 'styled-components';

export const MainContainer = styled.main`
  background: var(--grey-10) 0% 0% no-repeat padding-box;
  padding: 0 2rem 3.3rem;

  display: grid;
  grid-template-columns: repeat(2, calc(50% - 0.65rem));
  grid-gap: 1.3rem;

  h1 {
    margin: 2rem 0 0.7rem;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  h2 {
    font-size: 1.3rem;
  }

  section {
    &:not(.requestedDocuments) {
      background-color: var(--white);

      border-radius: 4px;
      box-shadow: 0 1px 2px var(--black-100-transparency);
    }

    &.requestedDocuments {
      grid-column-start: 2;
      grid-column-end: 3;

      & > h2 {
        margin-bottom: 1rem;
      }
    }

    header {
      border-bottom: 1px solid var(--cold-grey-40);
      padding: 1rem 2rem;
    }
  }
`;
