export const englishToArabic = input => {
  let result = '';
  for (var i = 0; i < input.length; i++) {
    switch(input[i].toLowerCase()){
      case 'a':
        result += 'ا';
        break;
      case 'b':
        result += 'ب';
        break;
      case 'c':
        if (input[i+1] === 'h'){
          result += 'ت';
        } else {
          result += 'ك';
        }
        break;
      case 'd':
        result += 'د';
        break;
      case 'e':
        if (i === 0 || input[i-1] === ' '){
          result += 'ا';
        }
        break;
      case 'f':
        result += 'ف';
        break;
      case 'g':
        result += 'ق'
        break;
      case 'h':
        if (input[i-1] === 'c'){
          result += 'ش';
          break;
        } else if (['s','t','g','k'].includes(input[i-1])) {
          break;
        } else {
          result += 'ه';
          break;
        }
      case 'i':
        result += 'ي';
        break;
      case 'j':
        result += 'ج';
        break;
      case 'k':
        if (input[i+1] === 'h'){
          result += 'خ';
        } else {
          result += 'ك';
        }
        break;
      case 'l':
        result += 'ل';
        break;
      case 'm':
        result += 'م';
        break;
      case 'n':
        result += 'ن';
        break;
      case 'o':
        result += 'و';
        break;
      case 'p':
        result += 'ب';
        break;
      case 'q':
        result += 'غ';
        break;
      case 'r':
        result += 'ر';
        break;
      case 's':
        if (input[i+1] === 'h'){
          result += 'ش'
        } else {
          result += 'س';
        }
        break;
      case 't':
        if (input[i+1] === 'h'){
          result += 'ث';
        } else {
          result += 'ت';
        }
        break;
      case 'u':
        result += 'و';
        break;
      case 'v':
        result += 'ف';
        break;
      case 'w':
        result += 'و';
        break;
      case 'x':
        result += 'كس';
        break;
      case 'y':
        result += 'ي';
        break;
      case 'z':
        result += 'ز';
        break;
      default:
        break;
    }
  }
  return result;
}

const arabic = [{char: 'ا', english: 'a'}, {char: 'ى', english: 'a'}, {char: 'و', english: 'u'}, {char: 'ي', english: 'i'}, {char:'ه', english: 'h'}, {char: 'ة', english: 'e'}, {char: 'ء', english: 'h'}, {char: 'ب', english: 'b'}, {char: 'ت', english: 't'}, {char: 'ث', english: 'th'}, {char: 'ن', english: 'n'}, {char: 'ٖس', english: 's'}, {char: 'ش', english: 'sh'}, {char: 'ح', english: 'h'}, {char: 'خ', english: 'kh'}, {char: 'ج', english: 'j'}, {char: 'م', english: 'm'}, {char: 'ف', english: 'f'}, {char: 'ق', english: 'gh'}, {char: 'ك', english: 'k'}, {char: 'ل', english: 'l'}, {char: 'ر', english: 'r'}, {char: 'ز', english: 'z'}, {char: 'د', english: 'd'}, {char: 'ذ', english: 'dh'}, {char: 'ط', english: 't'}, {char: 'ظ', english: 'dh'}, {char: 'ص', english: 's'}, {char: 'ض', english: 'd'}, {char: 'ع', english: 'a'}, {char: 'غ', english: 'gh'}];

export const arabicToEnglish = input => {
  let result = '';
    for (var i = 0; i < input.length; i++) {
      for (var j = 0; j < arabic.length; j++) {
        if (arabic[j].char.toLowerCase() === input[i].toLowerCase()){
          result += arabic[j].english;
          break;
        }
      }
    }
  return result;
}
