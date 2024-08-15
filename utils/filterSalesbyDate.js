function filterSalesByDate(salesData, month, year) {
  const filteredSales = salesData.filter((sale) => {
    const saleDate = new Date(sale.date);
    return saleDate.getMonth() + 1 === month && saleDate.getFullYear() === year;
  });

  console.log(
    `Sales of ${year}-${month.toString().padStart(2, "0")} are:`,
    filteredSales
  );

  return filteredSales;
}

module.exports = filterSalesByDate;
