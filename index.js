const salesData = require("./data/salesData.json");
const calculateTotalSales = require("./utils/totalSalesByEachProducts");
const calculateTotalRevenue = require("./utils/totalRevenue");
const filterSalesByDate = require("./utils/filterSalesbyDate");
const findTopSellingProduct = require("./utils/findTopSellingProduct");

console.log("Total Sales for Each Product: ", calculateTotalSales(salesData));
console.log("Total Revenue: ", calculateTotalRevenue(salesData));
console.log(filterSalesByDate(salesData, 2, 2023));

const topSellingProduct = findTopSellingProduct(salesData);
console.log(
  `Top Selling Product: ${topSellingProduct.product} with total sales of ${topSellingProduct.totalSales}`
);
