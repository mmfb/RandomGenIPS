

module.exports.genRandomNumber =
  function (num1, num2) {
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