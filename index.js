const salesData = require("./data/salesData.json");
const calculateTotalSales = require("./utils/totalSalesByEachProducts");
const calculateTotalRevenue = require("./utils/totalRevenue");

console.log("Total Sales for Each Product: ", calculateTotalSales(salesData));
console.log("Total Revenue: ", calculateTotalRevenue(salesData));
