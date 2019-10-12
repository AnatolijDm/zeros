module.exports = function zeros(expression) {
  const array = expression.split('*');
      let num = 0;
      array.forEach(item => {
        const nn = parseFloat(item);
        if(item.includes('!!')) {
          const ff = (num + zerosTwo(nn));
          num = ff;
         } else if(item.includes('!')){
          const ff = num + zerosOne(nn);
          num = ff;
         }
      })
      return num;
}
    function zerosOne(num) {
      if(num < 5) {
        return 0;
      }
      if(num <= 9) {
        return 1;
      }
      else if(num <= 14) {
      return 2;
      }
      else if(num <= 19) {
      return 3;
      }
      else if(num <= 24) {
      return 4;
      }
      else if(num <= 29) {
      return 6;
      }
      else if(num <= 34) {
      return 7;
      }
      else if(num <= 39) {
      return 8;
      }
      else if(num <= 44) {
      return 9;
      }
      else if(num <= 49) {
      return 10;
      }
      else if(num <= 54) {
      return 12;
      }
      else if(num <= 59) {
      return 13;
      }
      else if(num <= 64) {
      return 14;
      }
      else if(num <= 69) {
      return 15;
      }
      else if(num <= 74) {
      return 16;
      }
      else if(num <= 79) {
      return 18;
      }
      else if(num <= 84) {
      return 19;
      }
      else if(num <= 89) {
      return 20;
      }
      else if(num <= 94) {
      return 21;
      }
      else if(num <= 99) {
      return 22;
      }
      else if(num = 100) {
      return 24;
      }
      }

    function zerosTwo(num) {
      if(num % 2 != 0) {
        return 0;
      }
       else if(num <= 8) {
        return 0;
      }
      else if(num <= 18) {
      return 1;
      }
      else if(num <= 28) {
      return 2;
      }
      else if(num <= 38) {
      return 3;
      }
      else if(num <= 48) {
      return 4;
      }
      else if(num <= 58) {
      return 6;
      }
      else if(num <= 68) {
      return 7;
      }
      else if(num <= 78) {
      return 8;
      }
      else if(num <= 88) {
      return 9;
      }
      else if(num <= 98) {
      return 10;
      }
      else if(num = 100) {
      return 12;
      }
      }