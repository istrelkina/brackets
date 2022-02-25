module.exports = function check(str, bracketsConfig) {
  let isFlag = false;
  let lastElement;
  let arrStack = [];

  for (let i = 0; i < str.length; i++) {
    isFlag = false;
    // console.log('str[i] = ',str[i]);

    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0]) {
        // console.log('push');
        arrStack.push(str[i]);
        isFlag = true;
      };
    };
    if (isFlag == false) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        //  console.log('j=',j);
        if (str[i] == bracketsConfig[j][1]) {

          if (arrStack.length != 0) {
            //  console.log('Совпадение ', bracketsConfig[j][1]);
            lastElement = arrStack[arrStack.length - 1];
            if (lastElement == bracketsConfig[j][0]) {
              arrStack.pop();
              // console.log('pop', arrStack);
            } else return false;
          } else return false;
        }
      }
    };

  }

  if (arrStack.length === 0) { return true } else { return false };
}
