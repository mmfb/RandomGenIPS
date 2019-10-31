function genRandomNumber (num1, num2) {
  console.log("Model :"+num1+" "+num2+
  " "+(typeof num1 == 'number'
  && typeof num2== 'number'));
 
    if (typeof num1 == 'number'
       && typeof num2== 'number') {
      if (num1 > num2) {
          var aux = num1;
          num1 = num2;
          num2 = aux;
      }
      return Math.random() * (num2 - num1)  + num1;
    } else if (typeof num1 == 'number') {
        return Math.random() * num1;
    } else {
       return Math.random();
   }
}


module.exports.genRandomNumbers =
function (quantity, num1, num2) {
  var result = [];
  for(var i=0; i < quantity; i++ ) {
    result.push(genRandomNumber(num1,num2))      
  }   
  return result;
}

module.exports.genRandomNumber = genRandomNumber
  