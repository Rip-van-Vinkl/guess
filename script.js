function game () {
    
let minValueFirst = parseInt(prompt('Минимальное знание числа для игры','-999')) || -999; //запрос значения илb выставит значение по умолчанию, отсекает NaN
let maxValueFirst = parseInt(prompt('Максимальное знание числа для игры','999')) || 999;
let minValue = (minValueFirst <= -1000) ? -999 : minValueFirst; //
let maxValue = (maxValueFirst >= 1000) ? 999 : maxValueFirst;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${numberText(answerNumber)}?`;


/* кнопка больше */

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let answerPhrase = '';            
            const phraseRandom = Math.round( Math.random()*2);
            if (phraseRandom === 0) {
                answerPhrase = 'Вы пытетесь меня надуть, сударь!\n\u{1F615}';
            } else if (phraseRandom === 1) {
                answerPhrase = 'Ты меня просто убил..\n\u{1F635}';
            } else {
                answerPhrase = 'Три тысячи чертей!!! Нет таких значений!\n\u{1F624}';
            }                
    
            answerField.innerText = answerPhrase;
            gameRun = false;

        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            let answerVariant = '';            
            const phraseRandom = Math.round( Math.random()*2);
            if (phraseRandom === 0) {
                answerVariant = `Вы загадали число ${textOrNumber(answerNumber)}?`;
            } else if (phraseRandom === 1) {
                answerVariant = `Рискну предположить, что это число ${textOrNumber(answerNumber)}?`;
            } else {
                answerVariant = `Вероятно, это число ${textOrNumber(answerNumber)}?`;
            }

            answerField.innerText = answerVariant;
        }
    }
    
})


/* кнопка меньше */

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let answerPhrase = '';            
            const phraseRandom = Math.round( Math.random()*2);
            switch (phraseRandom) {
              case 0:
                answerPhrase = 'Вы загадали неправильное число!\n\u{1F914}';
                break;
              case 1:
                answerPhrase = 'Я сдаюсь..\n\u{1F92F}';
                break;
              case 2:
                answerPhrase = 'Где-то ты накосячил!\n\u{1F616}';
                break;
            }
    
            answerField.innerText = answerPhrase;
            gameRun = false;

        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.ceil((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            let answerVariant = '';            
            const phraseRandom = Math.round( Math.random()*2);
            switch (phraseRandom) {
              case 0:
                answerVariant = `Вы загадали число ${textOrNumber(answerNumber)}?`;
                break;
              case 1:
                answerVariant = `Скорее всего это число ${textOrNumber(answerNumber)}?`;
                break;
              case 2:
                answerVariant = `Сдаётся мне, коллега, что это число ${textOrNumber(answerNumber)}?`;
                break;
            }

            answerField.innerText = answerVariant
        }
    }
    
})


/* кнопка Верно! */

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){

        let answerVariant = '';            
        const phraseRandom = Math.round( Math.random()*2);
        if (phraseRandom === 0) {
            answerVariant = `Я всегда угадываю\n\u{1F60E}`;
        } else if (phraseRandom === 1) {
            answerVariant = `Я просто знал\n\u{1F60F}`;
        } else {
            answerVariant = `Уличная магия в действии\n\u{1F608}`;
        }

        answerField.innerText = answerVariant;
        gameRun = false;
    }
})
}


/* кнопка Старт! */

document.getElementById('startGame').addEventListener('click', function () {
    game ();
})

function chpok(id){
    elem = document.getElementById(id);
    state = elem.style.display;
    if (state =='') elem.style.display='none';
    else elem.style.display='';
}


/* кнопка Заново */

document.getElementById('btnRetry').addEventListener('click', function () {
    game ();
})

/*
let hide = document.getElementById('startGame');
hide.onclick = function () {
    let elem = document.getElementById('btnRetry');
    let display = window.getComputedStyle (elem, null).getPropertyValue("display");
    elem.style.display = elem.style.display =='none' || display == 'none' ? 'block' : 'none';
}
*/