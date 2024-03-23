export const formatCurrency = (_quantity: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(_quantity);
};
