function Main(){

  var firstOp = document.getElementById('first').value;
  var secondOP = document.getElementById('second').value;

  alert("1.addition 2.subtraction 3.multiplication 4.division 5.modulus");
  var choice = parseInt(prompt("enter your choice"));
  switch(true) {
    case choice==1:alert("addition is "+addition(firstOp,secondOP));break;
    case choice==2:alert("subtraction is "+subtraction(firstOp,secondOP));break;
    case choice==3:alert("multiplication is "+multiplication(firstOp,secondOP));break;
    case choice==4:alert("division is "+dvision(firstOp,secondOP));break
    case choice==5:alert("modulus is "+modulus(firstOp,secondOP));

      break;
    default: alert("enter the valid choice");

  }


}



function addition(firstOp , secondOp){

   var result = Number(firstOp) + Number(secondOp);
   return result;

 }


 function subtraction(firstOp , secondOp){
    var result = Number(firstOp) - Number(secondOp);
  return result;
}


  function multiplication(firstOp,secondOp){
var result = Number(firstOp) * Number(secondOp);
    return result;
}

function division(firstOp , secondOp){
  secondOP = Number(secondOp);
      while(true)
      {
      if(secondOp == 0)
      {
               var secondOp=Number(prompt("enter the second number greater than zero"));
      }
      else{
        break;
      }
    }
      var result = Number(firstOp) / Number(secondOp);
      result=Math.floor(result);
      return result;


    }



        function modulus(firstOp , secondOp){

          var result = Number(firstOp) % Number(secondOp);
        return result;
}
