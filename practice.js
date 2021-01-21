function budgetCalculator(watch,phone,laptop )
{
    var watchPrice = 50;
    totalWatchPrice = watch*watchPrice;

   var phonePrice = 100;
   totalPhonePrice = phone * phonePrice;

   var laptopPrice = 500;
   totalLaptopPrice = laptop * laptopPrice;

   var totalBudget = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

   return totalBudget;
}
var result = budgetCalculator(2,3,4);
console.log(result);
