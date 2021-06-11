import styled from 'styled-components';

export const RequestsContainer = styled.div`
  background-color: var(--white);

  border-radius: 4px;
  box-shadow: 0 1px 2px var(--black-100-transparency);

  width: 100%;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  h3 {
    display: inline-block;
  }

  header button {
    border: none;
    background-color: transparent;
    color: var(--blue);
    font-size: 1.3rem;
    float: right;
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
    }

    .info-group {
      display: flex;
      flex-wrap: wrap;

      p {
        width: fit-content;
        
        &:first-child {
          margin-right: 2rem;

          @media(max-width: 700px) {
            margin-right: 0;
          }
        }
      }
    }

    & + p {
      padding: 1rem 2rem;
    }
  }
`;
