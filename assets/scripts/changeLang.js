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
    "rulesTxt": {
        "en": "The game consists of two rounds: first as a pack of Chupacabras, then as the shepherd. The player who has more sheep left alive wins.<br><br>1. chupacabras round:<br>- Choose three chupacabra tokens (their identity is hidden from the opponent).<br>- Choose a sheep you want to kill, and announce your choice. The chosen sheep dies.<br>- All tokens adjacent to the killed sheep light up and must be moved to free cells. You cannot choose a place for the chupacabra among the killed sheep, as they are not highlighted.<br><br>2. Shepherd round:<br>- You are shown which sheep was killed.<br>- You need to guess which of your sheep was the hidden chupacabra.<br>- If you guess correctly, the chupacabra escapes. If not, your sheep dies.<br>- The round ends when all Chupacabras leave the field or all sheep are killed.<br><br>Good luck in the game!",
        "ru": "Игра состоит из двух раундов: сначала в качестве стаи чупакабр, затем в качестве пастуха. Побеждает игрок, у которого в живых осталось больше овец.<br><br> 1. Раунд чупакабр:<br> - Выберите три фишки чупакабр (их идентичность скрыта от противника).<br> - Выберите овцу, которую хотите убить, и объявите свой выбор. Выбранная овца погибает.<br> - Все фишки, находящиеся рядом с убитой овцой, подсвечиваются и должны быть передвинуты на свободные клетки. Нельзя выбирать место для чупакабр среди убитых овец, так как они не подсвечиваются.<br><br>2. Раунд пастуха:<br> - Вам показывается, какая овца была убита.<br>- Вам нужно угадать, какая из ваших овец была скрытой чупакаброй.<br>- Если вы угадываете правильно, чупакабра убегает. Если нет, ваша овца погибает.<br> - Раунд завершается, когда все чупакабры покинули поле или когда все овцы убиты.<br><br>Удачи в игре!",
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