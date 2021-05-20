export const hasObject = obj => {
  return Boolean(Object.keys(obj).length);
};

export const exchangeCurrency = price => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'KRW',
  }).format(price);
};
