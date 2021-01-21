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
        totalCost =firstPart+secondPart+othersDays;
    }
    return totalCost;
}
var result = hotelCost(2);
console.log(result);