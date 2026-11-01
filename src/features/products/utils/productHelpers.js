export const getStatus = (product) => (product.stock > 0 ? "selling" : "soldOut");

export const formatPrice = (value) =>
  `$${Number(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;