

/* выведет число в текстовой форме, если на это требуется меньше 20 символов */

function textOrNumber(answerNumber) {
  if ((String(numberText(answerNumber)).length <= 20)) {
    return numberText(answerNumber);
  } else {
    return (answerNumber);
  }
}


/* поставит минус, если нужно */

function numberText(answerNumber) {
  if (answerNumber >= 0) {
    return numberLength(answerNumber);
  } else {
    return (`минус ${numberLength(answerNumber * -1 )}`);
  }

}


/* обрабатывает все входящие числа и распределяет в numberX_XX и в numberXXX */

function numberLength(answerNumber) {
    if ((String(answerNumber).length === 1) || (String(answerNumber).length === 2)) {
      return (`${numberX_XX(answerNumber)}`);
    } else if (String(answerNumber).length === 3) {
      return (`${numberXXX(answerNumber)}`);
    }
};


/* обрабатывает одно- и двузначные чмсла */

function numberX_XX(answerNumber) {
      if ((answerNumber <= 20) || ((answerNumber % 10 === 0) && (String(answerNumber).length === 2))) {
      return (`${numberTextUnique(answerNumber)}`); //только уникальные одно- и двузначные
    } else if (String(answerNumber).length === 2) {
      return (`${numberTextUnique(answerNumber % 100 - answerNumber % 10)} ${numberTextUnique(answerNumber % 10)}`); // остальные двузначные
    }
};


/* обрабатывает трёхзначные числа */

function numberXXX(answerNumber) {
      if (answerNumber % 100 === 0) {
      return (`${numberTextUnique(answerNumber)}`); //только уникальные трёхзначные
    } else {
      return (`${numberTextUnique(answerNumber % 1000 - answerNumber % 100)} ${numberX_XX(answerNumber % 100)}`); // остальные трёхзначные
    }
};


/* уникальные наименования, они же детали для обработчиков-конструкторов */

function numberTextUnique(answerNumber) {
  switch (answerNumber) {
  case 0:
    return '0';
  case 1:
    return 'один';
  case 2:
    return 'два';
    break;
  case 3:
    return 'три';    
    break;
  case 4:
    return 'четыре';    
    break;
  case 5:
    return 'пять';    
    break;
  case 6:
    return 'шесть';
    break;
  case 7:
    return 'семь';
    break;
  case 8:
    return 'восемь';    
    break;
  case 9:
    return 'девять';    
    break;
  case 10:
    return 'десять';    
    break;
  case 11:
    return 'одиннадцать';
    break;
  case 12:
    return 'двенадцать';
    break;
  case 13:
    return 'тринадцать';    
    break;
  case 14:
    return 'четырнадцать';    
    break;
  case 15:
    return 'пятнадцать';    
    break;
  case 16:
    return 'шестнадцать';
    break;
  case 17:
    return 'семнадцать';
    break;
  case 18:
    return 'восемнадцать';    
    break;
  case 19:
    return 'девятнадцать';    
    break;
  case 20:
    return 'двадцать';    
    break;
  case 30:
    return 'тридцать';    
    break;
  case 40:
    return 'сорок';    
    break;
  case 50:
    return 'пятьдесят';    
    break;
  case 60:
    return 'шестьдесят';    
    break;
  case 70:
    return 'семьдесят';    
    break;
  case 80:
    return 'восемьдесят';    
    break;
  case 90:
    return 'девяносто';    
    break;
  case 100:
    return 'сто';    
    break;
  case 200:
    return 'двести';    
    break;
  case 300:
    return 'триста';    
    break;
  case 400:
    return 'четыреста';    
    break;
  case 500:
    return 'пятьсот';    
    break;
  case 600:
    return 'шестьсот';    
    break;
  case 700:
    return 'семьсот';    
    break;
  case 800:
    return 'восемьсот';    
    break;
  case 900:
    return 'девятьсот';    
    break;
};
}