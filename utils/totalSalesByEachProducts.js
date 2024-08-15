function calculateTotalSales(salesData) {
  const totalSalesPerProduct = salesData.reduce((acc, sale) => {
    const { product, quantity, price } = sale;
    const totalSale = quantity * price;

    if (!acc[product]) {
      acc[product] = 0;
    }
    acc[product] += totalSale;

    return acc;
  }, {});

  return totalSalesPerProduct;
}

module.exports = calculateTotalSales;
