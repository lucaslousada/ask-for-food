import styled from 'styled-components';

import { RecordsTable } from '../../../../styles/shared/RecordsTable';

export const Container = styled(RecordsTable)`
  th:nth-of-type(1),
  td:nth-of-type(1),
  th:nth-of-type(2),
  td:nth-of-type(2) {
    width: 29%;
  }

  th:nth-of-type(3),
  td:nth-of-type(3) {
    width: 18%;
  }

  th:nth-of-type(4),
  td:nth-of-type(4) {
    width: 24%;
  }

  td:last-of-type {
    text-transform: none;
  }
`;
