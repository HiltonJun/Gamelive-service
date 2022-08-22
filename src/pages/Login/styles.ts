import styled, { css } from "styled-components";
import backgroundPattern from "../../assets/logo_patterns/back-ground-pattern.jpg";

export const LoginPageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundPattern});
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const LoginFormContainer = styled.div`
  ${({ theme }) => css`
    width: 24rem;
    height: 28.875rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 8px;
    box-shadow: 3px 3px 6px 3px rgba(14, 80, 193, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;
    box-sizing: border-box;
  `}
`;

export const LoginLogoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 12.5rem;
    display: flex;
    justify-content: space-around;
    padding: 0 1rem;
    box-sizing: border-box;

    img {
      width: 12rem;
      height: 12rem;
    }
  `}
`;
