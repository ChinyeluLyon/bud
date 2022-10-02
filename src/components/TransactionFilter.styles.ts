import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

const brandColour = css`
  background: linear-gradient(144deg, #fe3435, #ab7edd 70%);
`;

// const stickyHeader = css`
//   position: fixed;
//   top: 0;
//   right: 0;
//   width: 100%;
//   margin: 0;
//   padding: 15px;
//   border-radius: 0;
// `;

export const MainPage = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap: 10px;
`;

export const Header = styled.div<{}>`
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
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  color: white;
  ${brandColour}
`;

export const ProviderHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;

  > p {
    margin: 0;
  }
`;

export const ProviderButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 20px;
`;

export const TransactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonAndText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  text-align: center;
  > p {
    margin: 0;
  }
`;

export const FilterButton = styled.button`
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    background: #ffffff5c;
    backdrop-filter: blur(10px);
    color: white;
    border: solid 3px white;
  }
`;

export const Loading = styled(FontAwesomeIcon)`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: spin 4s infinite linear;
`;
