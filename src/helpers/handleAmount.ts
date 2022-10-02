const handleAmount = (val: number, currency: string): string => {
  let prefix: string;

  switch (currency) {
    case "USD":
      prefix = "$";
      break;

    default:
      prefix = "£";
      break;
  }

  if (val < 0) {
    return `- ${prefix} ${val * -1}`;
  }

  return `${prefix} ${val}`;
};

export default handleAmount;
