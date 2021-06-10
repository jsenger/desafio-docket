import styled from 'styled-components';

export const MainContainer = styled.main`
  background: var(--grey-10) 0% 0% no-repeat padding-box;
  padding: 0 2rem 3.3rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  h1 {
    margin: 2rem 0;
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
