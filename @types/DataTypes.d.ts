type Provider = {
  title: string;
  account_number: string;
  sort_code: string;
  description: string;
};

type Amount = {
  value: number;
  currency_iso: string;
};

type Transaction = {
  id: string;
  date: string;
  description: string;
  category_title: string;
  amount: Amount;
};
