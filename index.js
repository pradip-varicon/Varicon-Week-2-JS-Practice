const salesData = require("./data/salesData.json");
const calculateTotalSales = require("./utils/totalSalesByEachProducts");
const calculateTotalRevenue = require("./utils/totalRevenue");
const filterSalesByDate = require("./utils/filterSalesbyDate");

console.log("Total Sales for Each Product: ", calculateTotalSales(salesData));
console.log("Total Revenue: ", calculateTotalRevenue(salesData));
console.log(filterSalesByDate(salesData, 2, 2023));
