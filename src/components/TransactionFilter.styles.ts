import styled, { css } from "styled-components";

const brandColour = css`
  background: linear-gradient(144deg, #fe3435, #ab7edd 70%);
`;

export const MainPage = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap: 10px;
`;

export const Header = styled.div`
  margin: 0
  width: 100%;
  padding: 10px;
  background: #ffffff;
  ${brandColour}
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ProviderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  color: white;
  ${brandColour}
`;

export const TransactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
