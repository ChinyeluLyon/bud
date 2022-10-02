import React, { useEffect, useState } from "react";
import handleAmount from "../../helpers/handleAmount";
import * as S from "./Transaction.styles";

type TransactionProps = {
  transaction: Transaction;
};

const TransactionComponent = ({ transaction }: TransactionProps) => {
  if (!transaction) {
    return <>loading...</>;
  }

  const amount = handleAmount(
    transaction.amount.value,
    transaction.amount.currency_iso
  );

  const transactionDate = new Date(transaction.date);

  return (
    <S.TransactionWrapper>
      <S.Header>
        <h2>
          {transaction.category_title} - {transaction.description}
        </h2>
        <S.Amount negative={amount.includes("-")}>{amount}</S.Amount>
      </S.Header>
      <S.Footer>
        <p>{transactionDate.toDateString()}</p>
      </S.Footer>
    </S.TransactionWrapper>
  );
};

export default TransactionComponent;
