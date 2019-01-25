const cyrillic = [{char: 'Е', english: 'ye'}, {char: 'А', english: 'a'}, {char: 'О', english: 'o'}, {char: 'Ю', english: 'yu'}, {char: 'Ё', english: 'yo'}, {char: 'Ь', english: 'silent'}, {char: 'Ы', english: 'i'}, {char: 'Я', english: 'ya'}, {char: 'И', english: 'i'}, {char: 'Й', english: 'i'}, {char: 'У', english: 'u'}, {char: 'Э', english: 'e'}, {char: 'В', english: 'v'}, {char: 'Г', english: 'g'}, {char: 'Д', english: 'd'}, {char: 'Ж', english: 'zh'}, {char: 'З', english: 'z'}, {char: 'Р', english: 'r'}, {char: 'С', english: 's'}, {char: 'Т', english: 't'}, {char: 'Ф', english: 'f'}, {char: 'Х', english: 'kh'}, {char: 'Ц', english: 'tsh'}, {char: 'Ч', english: 'ch'}, {char: 'Ш', english: 'sh'}, {char: 'Щ', english: 'shch'}, {char: 'Б', english: 'b'}, {char: 'Џ', english: 'dzh'}, {char: 'К', english: 'k'}, {char: 'Л', english: 'l'}, {char: 'М', english: 'm'}, {char: 'Н', english: 'n'}, {char: 'П', english: 'p'}, {char: 'Г', english: 'g'}];

export const cyrillicToEnglish = input => {
  let result = '';
    for (var i = 0; i < input.length; i++) {
      for (var j = 0; j < cyrillic.length; j++) {
        if (cyrillic[j].char.toLowerCase() === input[i].toLowerCase()){
          result += cyrillic[j].english;
          break;
        }
      }
    }
  return result;
}

export const englishToCyrillic = input => {
  let result = '';
  for (var i = 0; i < input.length; i++) {
    switch(input[i]) {
      case 'a':
        if (input[i-1] === 'y') {
          break;
        } else {
          result += 'а';
          break;
        }
      case 'b':
        result += 'б';
        break;
      case 'c':
        if (input[i+1] === 'h') {
          result += 'ч';
        } else {
          result += 'к';
        }
        break;
      case 'd':
        result += 'д';
        break;
      case 'e':
        if (input[i-1] === 'y') {
          result += 'е';
        } else {
          result += 'э';
        }
        break;
      case 'f':
        result += 'ф';
        break;
      case 'g':
        result += 'г';
        break;
      case 'h':
        if (['c','k','s','t','z'].includes(input[i-1])) {
          break;
        } else {
          result += 'х';
          break;
        }
      case 'i':
        result += 'и';
        break;
      case 'j':
        result += 'џ';
        break;
      case 'k':
        if (input[i+1] === 'h') {
          result += 'х';
        } else {
          result += 'к';
        }
        break;
      case 'l':
        result += 'л';
        break;
      case 'm':
        result += 'м';
        break;
      case 'n':
        result += 'н';
        break;
      case 'o':
        if (input[i-1] === 'y') {
          result += 'ё';
        } else {
          result += 'о';
        }
        break;
      case 'p':
        result += 'п';
        break;
      case 'q':
        result += 'к';
        break;
      case 'r':
        result += 'р';
        break;
      case 's':
        if (input[i+1] === 'h'){
          result += 'ш';
        } else {
          result += 'с';
        }
        break;
      case 't':
        result += 'т';
        break;
      case 'u':
        result += 'ю';
        break;
      case 'v':
        result += 'в';
        break;
      case 'w':
        result += 'ю'
        break;
      case 'x':
        result += 'кс';
        break;
      case 'y':
        if (input[i+1] === 'o' || input[i+1] === 'e') {
          break;
        } else if (input[i+1] === 'a') {
          result += 'я';
          break;
        } else {
          result += 'и';
          break;
        }
      case 'z':
        if (input[i+1] === 'h'){
          result += 'ж';
        } else {
          result += 'з';
        }
        break;
      default:
        result += input[i];
        break;
    }
  }
  return result;
}
