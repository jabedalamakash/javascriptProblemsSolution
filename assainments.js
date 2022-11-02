//// 1.Feet to Mile:

function feetToMile(feet){
   var  miles =feet*0.000189394;
   return miles;
}
var lenth= feetToMile(100);
console.log("answer is ",lenth,"miles.");



// 2.Wood Calculator:
// Assumptions:
// for each chair requires 1 cubic wood
// for each table requires 3 cubic wood
// for each chair requires 5 cubic wood

 function woodCalculator(numberOfChair,numberOfTable,numberOfBed){
    var woodForChair=numberOfChair*1;
    var woodForTable= numberOfTable*3;
    var woodForBed=numberOfBed*5;
    var totalWood=woodForChair+woodForTable+woodForBed;

    if(woodForChair<0||woodForTable<0|| woodForBed<0){
      return "input can't be zero";
    }
    else{
      return totalWood;

    }
  

 }
 var customer=woodCalculator(6,4,2);
 console.log("You need total ",customer,"cubic Wood.");


// 3.Brick Calculator:
//Assumptions:
// For floor 1-10: 15 feet->For every feet 1000 brick * 15
//For floor 11-20: 12 feet->For every feet 1000 brick * 12
//For floor greater than 20: ->For every feet 1000 brick * 10


 function brickCalculator(floor){
   var bricksPerFeet=1000;


   if(Math.sign(floor)==-1 ||floor==0) {
      return "floor can't be 0 or negative. floor should be greater than 0 and positive integer ";
   }

   else if(floor<=10 && floor>0){
      var bricksPerFloor=15*bricksPerFeet*floor;

   }
   
   else if(floor<=20 && floor>10){

      var bricksPerFloor=12*bricksPerFeet*floor;


   }
   
   else {
      var bricksPerFloor=10*bricksPerFeet*floor; 

   }
   
   return bricksPerFloor;

 }

 var client= brickCalculator(25);
 console.log(client);


 // 4. Tiny Friend:
// Return friend with smallest name


function tinyFriend(friendsName){
    var tiny=friendsName[0];
      for(var i=0;i<friendsName.length;i++){
        if(friendsName[i].length<=0){
            console.log("Empty");
        }
        else {
            if(friendsName[i].length<tiny.length){
                tiny=friendsName[i]; 
            }
        }

      }
      return tiny;
   }
   
   var friendsName=["Shakib","Tamim","Shohan","Liton","Naim"];
   var smallestName=tinyFriend(friendsName);
   console.log(smallestName);
