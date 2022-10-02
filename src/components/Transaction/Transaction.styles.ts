import styled, { css } from "styled-components";

export const TransactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border: solid 1px black;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  margin: 10px;
`;

const negativeMoney = css`
  color: #ff4f4f;
`;

const positiveMoney = css`
  color: #00c345;
`;

export const Amount = styled.h2<{
  negative: boolean;
}>`
  ${(p) => (p.negative ? negativeMoney : positiveMoney)}
`;
