import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    margin-bottom: 10px;
  }

  input {
    height: 48px;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.color_200};
    color: ${({ theme }) => theme.colors.color_900};
    border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
    border-radius: 5px;
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
