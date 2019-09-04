export const CentsToDollars = value => {
  let dollars = value / 100
  return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
}