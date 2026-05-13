import { getExchangeRate } from './libs/currency';
import { getShippingQuote } from './libs/shipping';

export function getPriceInCurrency(price, currency) {
  const rate = getExchangeRate('USD', currency);
  return price * rate;
}

export function getShippingInfo(destination) {
  const quote = getShippingQuote(destination);
  if (!quote) return 'Shipping Unavailable';
  return `Shipping Cost: $${quote.cost} (${quote.estimatedDays} Days)`;
}
