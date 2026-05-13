import { getExchangeRate } from './libs/currency';

export function getPriceInCurrency(price, currency) {
  const rate = getExchangeRate('USD', currency);
  return price * rate;
}
