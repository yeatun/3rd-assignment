//#kilometerToMeter
function kilometerToMeter (kilometer)
{
    //1km = 1000m
   var meter = kilometer * 1000;
     return meter;
}

//#budgetCalculator
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


//#hotelCost
function hotelCost(days)
{
    var totalCost= 0;
    //1st 10 days cost
    if (days <= 10)
    {
       totalCost = days * 100;
    }
   // next 10days cost
    else if (days<=20)
    {
        var first10Days = 10 * 100;
        var remaining = days - 10;
        var second10days =remaining * 80;
       totalCost= first10Days + second10days;

    }
    //after 20 days total cost
    else
    {
        var first10Days = 10* 100;
        var second10days = 10 * 80;
        var remaining = days-20;
        var othersDays = remaining * 50;
        totalCost =first10Days+second10days+othersDays;
    }
    return totalCost;
}


//#megaFriends
function megaFriend(friendsName=["promit","zikrul","anti virus","atiq"])
{


var max = friendsName[0];
for(var i = 0; i< friendsName.length;i++)
{
    
    if (friendsName[i].length> max.length)

    {
      max=friendsName[i];
    }  
} 
 return max;
}