const langData = {
    "lvl": {
        "en": "Difficulty level",
        "ru": "Сложность",
    },
    "history": {
        "en": "History",
        "ru": "История",
    },
    "rating": {
        "en": "Rating",
        "ru": "Рейтинг",
    },
    "lang": {
        "en": "Change language",
        "ru": "Смена языка",
    },
    "start": {
        "en": "New game",
        "ru": "Новая игра",
    },
    "rules": {
        "en": "Rules",
        "ru": "Правила",
    },
};

var elements = document.getElementsByClassName("chL");
const icoL = document.getElementById('icoL');
const changeLangBtn = document.getElementById("changeLangBtn");
const changeLangBtn2 = document.getElementById("changeLangBtn2");

changeLangBtn.addEventListener("click", chLang);
changeLangBtn2.addEventListener("click", chLang);

function chLang() {
    switch(changeLangBtn.value) {
        case 'ru' :
            icoL.src = './assets/img/ico/en.png';
            changeLangBtn.value = 'en';
            break;
        case 'en' :
            icoL.src = './assets/img/ico/ru.png';
            changeLangBtn.value = 'ru';
            break;
    }
    let currLang = changeLangBtn.value;

    for (let el of elements) {
      el.innerHTML = langData[el.dataset.key][currLang];
    }
    
    
}