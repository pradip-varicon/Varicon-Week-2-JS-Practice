function calculateTotalRevenue(salesData) {
  const totalRevenue = salesData.reduce((acc, sale) => {
    const { quantity, price } = sale;
    return acc + quantity * price;
  }, 0);

  return totalRevenue;
}

module.exports = calculateTotalRevenue;
