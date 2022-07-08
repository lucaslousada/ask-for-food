import { css } from 'styled-components';
import { transparentize } from 'polished';

export const RecordsTable = css`
  margin-top: 40px;
  width: 100%;
  border-spacing: 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};

  th,
  td {
    padding: 15px 0 15px 20px;
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
    tr {
      transition: background-color ${({ theme }) => theme.transitions.default};

      &:hover {
        background-color: ${({ theme }) =>
          transparentize(0.8, theme.colors.color_600)};
      }
    }

    td {
      text-transform: capitalize;
      font-size: 14px;
      vertical-align: top;

      p:last-of-type {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.color_800};
      }
    }

    td:last-of-type {
      padding: 8px 20px;
      vertical-align: middle;

      a {
        display: flex;
        width: min-content;
        padding: 7px;
        margin: 0 auto;
        background-color: transparent;
        border: none;
        border-radius: 50%;
        transition: background-color ${({ theme }) => theme.transitions.default};

        &:hover {
          background-color: ${({ theme }) =>
            theme.colors.transparent_color_100};

          svg {
            color: ${({ theme }) => theme.colors.color_900};
          }
        }

        svg {
          margin: 0 auto;
          width: 22px;
          height: 22px;
          color: ${({ theme }) => transparentize(0.6, theme.colors.color_900)};
          transition: color ${({ theme }) => theme.transitions.default};
        }
      }
    }

    tr + tr td {
      border-top: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
    }
  }
`;
