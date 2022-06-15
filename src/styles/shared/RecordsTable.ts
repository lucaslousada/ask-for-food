import styled from 'styled-components';

export const RecordsTable = styled.table`
  margin-top: 40px;
  width: 100%;
  border-spacing: 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};

  th,
  td {
    padding: 15px 20px;
    text-align: left;
  }

  thead {
    background-color: ${({ theme }) => theme.colors.transparent_color_200};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.color_800};

    th {
      font-weight: 500;
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.transparent_color_100};
    }

    th:first-of-type {
      border-radius: 5px 0 0 0;
    }

    th:last-of-type {
      border-radius: 0 5px 0 0;
    }
  }

  tbody {
    td {
      text-transform: capitalize;
      font-size: 14px;
      vertical-align: top;

      p:last-of-type {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.color_800};
      }
    }

    tr + tr td {
      border-top: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
    }
  }
`;
