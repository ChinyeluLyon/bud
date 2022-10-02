import React, { useEffect, useState } from "react";
import handleAmount from "../helpers/handleAmount";
import TransactionComponent from "./Transaction/Transaction";
import * as S from "./TransactionFilter.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faCircleUp,
  faCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const TransactionFilter = () => {
  const [apiData, setApiData] = useState<any>();
  const [selectedTransactions, setSelectedTransactions] = useState<
    Transaction[]
  >([]);

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

  const renderTransactions = selectedTransactions?.map((t, idx) => {
    return <TransactionComponent key={idx} transaction={t} />;
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
          <S.FilterButton
            onClick={() => {
              const htl = [...selectedTransactions];
              htl?.sort((a: Transaction, b: Transaction) => {
                if (a.amount.value < b.amount.value) {
                  return -1;
                }
                if (a.amount.value > b.amount.value) {
                  return 1;
                }
                return 0;
              });
              setSelectedTransactions(htl);
            }}
          >
            <FontAwesomeIcon icon={faCircleDown} size="2x" />
          </S.FilterButton>
          <S.FilterButton
            onClick={() => {
              const lth = [...selectedTransactions];
              lth?.sort((a: Transaction, b: Transaction) => {
                if (a.amount.value < b.amount.value) {
                  return 1;
                }
                if (a.amount.value > b.amount.value) {
                  return -1;
                }
                return 0;
              });
              setSelectedTransactions(lth);
            }}
          >
            <FontAwesomeIcon icon={faCircleUp} size="2x" />
          </S.FilterButton>
          <S.FilterButton
            onClick={() => {
              setSelectedTransactions(apiData?.transactions);
            }}
          >
            <FontAwesomeIcon icon={faCircleDot} size="2x" />
          </S.FilterButton>
        </S.ProviderButtons>
      </S.ProviderWrapper>
      <S.TransactionsWrapper>{renderTransactions}</S.TransactionsWrapper>
    </S.MainPage>
  );
};

export default TransactionFilter;
