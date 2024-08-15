function filterSalesByDate(salesData, isoDate) {
  const inputDate = new Date(isoDate);
  const inputMonth = inputDate.getMonth() + 1;
  const inputYear = inputDate.getFullYear();

  const filteredSales = salesData.filter((sale) => {
    const saleDate = new Date(sale.date);
    return (
      saleDate.getMonth() + 1 === inputMonth &&
      saleDate.getFullYear() === inputYear
    );
  });

  console.log(
    `Sales of ${inputYear}-${inputMonth.toString().padStart(2, "0")} are:`,
    filteredSales
  );

  return filteredSales;
}

module.exports = filterSalesByDate;
