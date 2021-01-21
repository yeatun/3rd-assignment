function megaFriend()
{
var friendsName=["anku","mridul","anti virus","atiq"];

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
var result =megaFriend();
console.log(result);