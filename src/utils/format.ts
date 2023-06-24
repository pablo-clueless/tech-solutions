
export const formatCurrency = (currency: string) => {
  return new Intl.NumberFormat(['en-UK', 'en-NG'], {currency, style: 'currency'})
}
