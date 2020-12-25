export const getImageUrl = (itemName) => {
  const imgName = itemName.toLowerCase().split(' ').join('-');
  return `/images/shop-items/${imgName}.png`;
};
