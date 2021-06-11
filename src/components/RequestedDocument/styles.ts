import styled from 'styled-components';

export const RequestsContainer = styled.div`
  background-color: var(--white);

  border-radius: 4px;
  box-shadow: 0 1px 2px var(--black-100-transparency);

  width: 100%;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  .card-info {
    margin: 1rem 2rem 0;
    padding-bottom: 1rem;

    display: grid;
    grid-template-columns: repeat(2, calc(50% - 0.5rem));
    grid-gap: 1rem;

    border-bottom: 1px solid var(--cold-grey-40);

    h4 {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }

    p {
      margin-bottom: 0.5rem;

      & > span {
        margin-left: 2rem;
      }
    }

    & + p {
      padding: 1rem 2rem;
    }
  }
`;
