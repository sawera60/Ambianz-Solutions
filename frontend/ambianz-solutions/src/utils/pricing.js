export const GBP_TO_PKR = 360;

export const getPricePKR = (productOrPrice) => {
  const rawPrice =
    typeof productOrPrice === "object" && productOrPrice !== null
      ? productOrPrice.price ?? productOrPrice.pprice
      : productOrPrice;

  if (typeof rawPrice === "number") return Math.round(rawPrice);

  const priceText = String(rawPrice || "");
  const parsed = parseFloat(priceText.replace(/[^0-9.]/g, ""));
  if (!Number.isFinite(parsed)) return 0;

  return priceText.includes("£") || priceText.includes("Â£")
    ? Math.round(parsed * GBP_TO_PKR)
    : Math.round(parsed);
};

export const formatPricePKR = (productOrPrice) =>
  `Rs. ${getPricePKR(productOrPrice).toLocaleString()}`;
