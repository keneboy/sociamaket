function formatPrice(price: number) {
  return Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price);
}
export default formatPrice;
