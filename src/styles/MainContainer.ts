import styled from 'styled-components';

export const MainContainer = styled.main`
  background: var(--grey-10) 0% 0% no-repeat padding-box;
  padding: 0 2rem 3.3rem;

  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1.3rem;

  h1 {
    margin: 2rem 0 0.7rem;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  h2 {
    font-size: 1.3rem;
  }

  section {
    padding: 2rem;
    background-color: var(--white);

    border-radius: 4px;
    box-shadow: 0 1px 2px var(--black-100-transparency);

    h2 {
      margin-bottom: 2rem;
    }
  }
`;
