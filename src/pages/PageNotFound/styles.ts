import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  section {
    text-align: center;

    h1 {
      font-weight: 200;
      font-size: 40px;
    }

    p {
      max-width: 560px;
      margin: 16px 0 32px;
      font-size: 18px;
      font-weight: 300;
    }

    a {
      display: block;
      width: max-content;
      margin: 0 auto;
      padding: 6px 13px;
      background-color: ${({ theme }) => theme.colors.transparent_color_200};
      border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
      transition: background-color ${({ theme }) => theme.transitions.default};

      &:hover {
        background-color: ${({ theme }) => theme.colors.color_600};
      }
    }
  }
`;

export const AnimationWrapper = styled.div`
  display: flex;
  width: 400px;
`;
