import React, { useEffect, useState } from "react";
import handleAmount from "../helpers/handleAmount";
import TransactionComponent from "./Transaction/Transaction";
import * as S from "./TransactionFilter.styles";

const TransactionFilter = () => {
  const [apiData, setApiData] = useState<any>();
  const [selectedTransactions, setSelectedTransactions] =
    useState<Transaction[]>();

  const getData = async () => {
    fetch("http://www.mocky.io/v2/5c62e7c33000004a00019b05")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setApiData(data);
      })
      .catch(function () {
        console.log("Booo");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (apiData) {
      setSelectedTransactions(apiData.transactions);
    }
  }, [apiData]);

  console.log(apiData?.transactions);

  const renderTransactions = selectedTransactions?.map((t) => {
    return <TransactionComponent transaction={t} />;
  });

  return (
    <S.MainPage>
      <S.Header>
        <h1>Chinyelu's Transaction Filter</h1>
      </S.Header>
      <S.ProviderWrapper>
        <S.ProviderHeader>
          <h1>{apiData?.provider.title}</h1>
          <h1>
            {handleAmount(
              apiData?.balance.amount,
              apiData?.balance.currency_iso
            )}
          </h1>
        </S.ProviderHeader>
        <S.ProviderButtons>
        <button>x</button>
        <button>x</button>
        <button>x</button></S.ProviderButtons>
      </S.ProviderWrapper>
      <S.TransactionsWrapper>{renderTransactions}</S.TransactionsWrapper>
    </S.MainPage>
  );
};

export default TransactionFilter;
