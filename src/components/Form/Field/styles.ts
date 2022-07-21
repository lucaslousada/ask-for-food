import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.color_800};
  }

  input {
    height: 40px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.color_100};
    color: ${({ theme }) => theme.colors.color_900};
    border: none;
    border-radius: 3px;
    font-size: 14px;
  }

  span {
    display: flex;
    align-items: flex-start;
    column-gap: 5px;
    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
    margin-top: 5px;

    svg {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
    }
  }
`;
