import styled from 'styled-components';

export const FieldsWrapper = styled.div`
  display: grid;
  padding: 20px 30px 40px;

  grid-template-columns: 33% 10% 14.7% 33%;
  gap: 20px;

  > div:nth-child(1) {
    grid-column: 1 / span 3;
  }

  > div:nth-child(2) {
    grid-column: 4 / span 1;
  }

  > div:nth-child(3) {
    grid-column: 1 / span 2;
  }

  > div:nth-child(4) {
    grid-column: 3 / span 1;
  }

  > div:nth-child(5) {
    grid-column: 4 / span 1;
  }

  > div:nth-child(6) {
    grid-column: 1 / span 1;
  }

  > div:nth-child(7) {
    grid-column: 2 / span 3;
  }
`;
