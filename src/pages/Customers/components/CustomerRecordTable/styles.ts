import styled from 'styled-components';

import { RecordsTable } from '../../../../styles/shared/RecordsTable';

export const Container = styled.table`
  ${RecordsTable}

  th:nth-of-type(1),
  td:nth-of-type(1),
  th:nth-of-type(2),
  td:nth-of-type(2) {
    width: 26.6%;
  }

  th:nth-of-type(3),
  td:nth-of-type(3) {
    width: 18%;
  }

  th:nth-of-type(4),
  td:nth-of-type(4) {
    width: 20.5%;
  }

  td:nth-of-type(4) {
    text-transform: none;
  }
`;
