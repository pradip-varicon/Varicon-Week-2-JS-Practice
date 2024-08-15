const salesData = require("./data/salesData.json");
const calculateTotalRevenue = require("./utils/totalRevenue");

console.log("Total Revenue: ", calculateTotalRevenue(salesData));
