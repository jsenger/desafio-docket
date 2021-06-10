import styled from 'styled-components';

export const RequestContainer = styled.section`
  flex-grow: 1;

  form {
    padding: 1rem 2rem;

    .form-group {
      margin-bottom: 1rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
      }

      label > span {
        color: var(--red);
      }

      input,
      select {
        width: 100%;
        padding: 0.6rem 1rem;

        border: 1px solid var(--grey-40);
        border-radius: 2px;

        color: var(--black-100);

        &::placeholder {
          color: var(--black20-disable-);
        }
      }

      &.select {
        position: relative;

        &:before {
          content: '';
          color: var(--grey-40);

          position: absolute;
          bottom: 0.9rem;
          right: 1rem;

          border: solid;
          border-width: 0 3px 3px 0;
          border-radius: 2px;

          display: inline-block;
          margin-top: -5px;
          padding: 3px;

          transform: rotate(-135deg);
          transition: all 0.4s ease-in;
          z-index: 2;
        }

        select {
          appearance: none;
          position: relative;
        }
      }
    }

    h3 {
      font-size: 1rem;
      padding: 1rem 0 2rem;
    }

    button {
      background-color: var(--blue);
      color: var(--white);
      font-weight: 600;

      border: none;
      border-radius: 16px;
      padding: 0.5rem 1rem;
    }
  }
`;
