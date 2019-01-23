export const dutchToEnglish = input => {
  let result = '';
  for (var i = 0; i < input.length; i++) {
    switch(input[i]){
      case 'g':
        result += 'kh';
        break;
      case 'j':
        result += 'y';
        break;
      case 'w':
        result += 'v';
        break;
      case 'y':
        result += 'ay';
        break;
      case 'c':
        if (input[i + 1] === 'h') {
          result += 'k';
        } else {
          result += input[i];
        }
        break;
      case 'i':
        if (input[i + 1] === 'j'){
          result += 'a';
        } else {
          result += input[i];
        }
        break;
      case 'e':
        if (input[i + 1] === 'e'){
          result += 'a';
        } else if (input[i-1] === 'e'){
          result += 'y';
        } else {
          result += input[i];
        }
        break;
      default:
        result += input[i];
        break;
    }
  }
  return result;
}

export const englishToDutch = input => {
  let result = '';
  for (var i = 0; i < input.length; i++) {
    switch(input[i]) {
      case 'a':
        if (input[i+1] === 'y') {
          result += 'i';
        } else {
          result += input[i];
        }
        break;
      case 'y':
        if (input[i-1] === 'a'){
          result += 'j';
        } else {
          result += input[i];
        }
        break;
      case 'g':
        result += 'k';
        break;
      case 'w':
        result += 'u';
        break;
      default:
        result += input[i];
        break;
    }
  }
  return result;
}
