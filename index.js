const readline = require("readline");
const salesData = require("./data/salesData.json");
const calculateTotalSales = require("./utils/totalSalesByEachProducts");
const calculateTotalRevenue = require("./utils/totalRevenue");
const filterSalesByDate = require("./utils/filterSalesbyDate");
const findTopSellingProduct = require("./utils/findTopSellingProduct");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("\nSales Data Menu:");
  console.log("1. Calculate Total Sales for Each Product");
  console.log("2. Calculate Total Revenue");
  console.log("3. Filter Sales By Date");
  console.log("4. Find Top Selling Product");
  console.log("5. Exit");

  rl.question("\nPlease choose an option (1-5): ", handleUserChoice);
}

// Function to handle user choice
function handleUserChoice(choice) {
  switch (parseInt(choice)) {
    case 1:
      console.log(
        "Total Sales for Each Product: ",
        calculateTotalSales(salesData)
      );
      break;
    case 2:
      console.log("Total Revenue: ", calculateTotalRevenue(salesData));
      break;
    case 3:
      rl.question("Enter the month (1-12): ", (month) => {
        rl.question("Enter the year (YYYY): ", (year) => {
          console.log(
            filterSalesByDate(salesData, parseInt(month), parseInt(year))
          );
          showMenu();
        });
      });
      return;
    case 4:
      var topSellingProduct = findTopSellingProduct(salesData);
      console.log(
        `Top Selling Product: ${topSellingProduct.product} with total sales of ${topSellingProduct.totalSales}`
      );
      break;
    case 5:
      console.log("Thanks for using the App :)");
      rl.close();
      return;
    default:
      console.log("Invalid choice, please select a valid option.");
      break;
  }
  showMenu();
}

showMenu();
