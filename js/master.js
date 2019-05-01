function spawnNumber(firstNum, secondNum) {
  var arrayNum = [];
  if (secondNum < firstNum) {
    document.getElementById('allNum').innerHTML = 'Second number should larger than first number.';
    return;
  } else {
    for (var i = firstNum; i <= secondNum; i++) {
      arrayNum.push(i);
    }
  }
  document.getElementById('allNum').innerHTML = arrayNum;
  numberToLetter(arrayNum);
}

function numberToLetter(array) {
  var arrayLetter = [];
  for (var i = 0; i < array.length; i++) {
    arrayLetter.push(convert(array[i].toString()));
    toLetter = '';
  }
  document.getElementById('allWord').innerHTML = arrayLetter;
  letterCount(arrayLetter);
}

var toLetter = '';

function convert(num) {
  switch (num.length) {
    case 4:
      if (num.startsWith(1)) {
        toLetter += 'One thousand';
      }
      break;
    case 3:
      if (num.startsWith(1)) {
        toLetter += 'One';
      } else if (num.startsWith(2)) {
        toLetter += 'Two';
      } else if (num.startsWith(3)) {
        toLetter += 'Three';
      } else if (num.startsWith(4)) {
        toLetter += 'Four';
      } else if (num.startsWith(5)) {
        toLetter += 'Five';
      } else if (num.startsWith(6)) {
        toLetter += 'Six';
      } else if (num.startsWith(7)) {
        toLetter += 'Seven';
      } else if (num.startsWith(8)) {
        toLetter += 'Eight';
      } else if (num.startsWith(9)) {
        toLetter += 'Nine';
      }
      toLetter += ' hundred';
      if (num.charAt(1) != 0 || num.charAt(2) != 0) toLetter += ' and ';
      convert(num.substr(1, num.length - 1));
      break;
    case 2:
      if (num.startsWith(1)) {
        if (num.endsWith(1)) {
          toLetter += 'eleven';
        } else if (num.endsWith(2)) {
          toLetter += 'Twelve';
        } else if (num.endsWith(3)) {
          toLetter += 'Thirteen';
        } else if (num.endsWith(4)) {
          toLetter += 'Fourteen';
        } else if (num.endsWith(5)) {
          toLetter += 'Fifteen';
        } else if (num.endsWith(6)) {
          toLetter += 'Sixteen';
        } else if (num.endsWith(7)) {
          toLetter += 'Seventeen';
        } else if (num.endsWith(8)) {
          toLetter += 'Eighteen';
        } else if (num.endsWith(9)) {
          toLetter += 'Nineteen';
        } else if (num.endsWith(0)) {
          toLetter += 'Ten';
        }
      } else if (num.startsWith(2)) {
        toLetter += 'Twenty ';
        convert(num.substr(1, num.length - 1));
      } else if (num.startsWith(3)) {
        toLetter += 'Thirty ';
        convert(num.substr(1, num.length - 1));
      } else if (num.startsWith(4)) {
        toLetter += 'Forty ';
        convert(num.substr(1, num.length - 1));
      } else if (num.startsWith(5)) {
        toLetter += 'Fifty ';
        convert(num.substr(1, num.length - 1));
      } else if (num.startsWith(6)) {
        toLetter += 'Sixty ';
        convert(num.substr(1, num.length - 1));
      } else if (num.startsWith(7)) {
        toLetter += 'Seventy ';
        convert(num.substr(1, num.length - 1));
      } else if (num.startsWith(8)) {
        toLetter += 'Eighty ';
        convert(num.substr(1, num.length - 1));
      } else if (num.startsWith(9)) {
        toLetter += 'Ninety ';
        convert(num.substr(1, num.length - 1));
      } else if (num.startsWith(0)) {
        toLetter += '';
        convert(num.substr(1, num.length - 1));
      }
      break;
    case 1:
      if (num.startsWith(1)) {
        toLetter += 'One';
      } else if (num.startsWith(2)) {
        toLetter += 'Two';
      } else if (num.startsWith(3)) {
        toLetter += 'Three';
      } else if (num.startsWith(4)) {
        toLetter += 'Four';
      } else if (num.startsWith(5)) {
        toLetter += 'Five';
      } else if (num.startsWith(6)) {
        toLetter += 'Six';
      } else if (num.startsWith(7)) {
        toLetter += 'Seven';
      } else if (num.startsWith(8)) {
        toLetter += 'Eight';
      } else if (num.startsWith(9)) {
        toLetter += 'Nine';
      }
      break;
  }
  return toLetter;
}

function letterCount(array) {
  var letterString = array.join('').replace(/\s+/g, '');
  document.getElementById('result').innerHTML = letterString.length;
}