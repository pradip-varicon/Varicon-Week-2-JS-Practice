function findTopSellingProduct(salesData) {
  // Use reduce to accumulate sales totals
  const sales = salesData.reduce((acc, item) => {
    const product = item.product;
    const totalPrice = item.quantity * item.price;

    if (acc[product]) {
      acc[product] += totalPrice;
    } else {
      acc[product] = totalPrice;
    }

    return acc;
  }, {});

  // Use Object.entries and reduce to find the top product
  const topProduct = Object.entries(sales).reduce(
    (top, [product, totalSales]) => {
      if (totalSales > top.totalSales) {
        return { product, totalSales };
      }
      return top;
    },
    { product: null, totalSales: 0 }
  );

  return topProduct;
}

module.exports = findTopSellingProduct;
