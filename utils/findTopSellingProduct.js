function findTopSellingProduct(salesData) {
  let sales = {};
  let topProduct = { product: null, totalSales: 0 };

  for (let item of salesData) {
    const product = item.product;
    const totalPrice = item.quantity * item.price;

    if (sales[product]) {
      sales[product] += totalPrice;
    } else {
      sales[product] = totalPrice;
    }

    if (sales[product] > topProduct.totalSales) {
      topProduct = { product: product, totalSales: sales[product] };
    }
  }

  return topProduct;
}

module.exports = findTopSellingProduct;
