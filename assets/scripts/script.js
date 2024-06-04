//window.onbeforeunload = function() {
	//return true;
//};

const newGameBtn = document.getElementById('newGame');
const startMenu = document.getElementById('startMenu');
const main = document.getElementById('main');
const menuBtn = document.getElementById('menuBtn');

newGameBtn.onclick = function() {
    startMenu.style.display = "none";
    main.style.display = "grid";
}
menuBtn.onclick = function() {
    startMenu.style.display = "grid";
    main.style.display = "none";
}

const rulBtn = document.getElementById('rulBtn');
const rules = document.getElementById('rules');

rulBtn.addEventListener("click", rulOpen);

function rulOpen() {
    rules.style.display = "grid";
}


const closeRulBtn = document.getElementById('closeRulBtn');
closeRulBtn.onclick = function() {
    rules.style.display = "none";
}

const infoBtn = document.getElementById('infoBtn');
const info = document.getElementById('info');
infoBtn.onclick = function() {
    info.style.display = "grid";
}


const closeInfoBtn = document.getElementById('closeInfoBtn');
closeInfoBtn.onclick = function() {
    info.style.display = "none";
}
const isVisited = localStorage.getItem('visited');
const modalFirstTime = document.getElementById('modalFirstTime');

if (!isVisited) {
modalFirstTime.style.display = "grid";
console.log('Привет!')
localStorage.setItem('visited', true);
}

let usersName = document.getElementById('usersName');
const confirmNameBtn = document.getElementById('confirmNameBtn');
const savedName = localStorage.getItem('savedName');
const nameU = document.getElementById('nameU');
const visC = document.getElementById('visitCard');

confirmNameBtn.onclick = function() {
    if(usersName.value === '') {
    alert('Введите имя!');
    } else {
        localStorage.setItem('savedName', usersName.value);
        nameU.append(document.getElementById('usersName').value) ;
        modalFirstTime.style.display = "none";
        visC.style.display = "grid";
    }
}

//Game
const places = document.querySelector(`.places`);
const place = places.querySelectorAll(`.place`);
for(const onePlace of place) {
    onePlace.draggable = true;
}
places.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
})
places.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
})
const getNextPlace = (cursorPosition, currPlace) => {
const currPlaceCoord = currPlace.getBoundingClientRect();
const currPlaceCenter = currPlaceCoord.y + currPlaceCoord.height / 2;

    const nextPlace = (cursorPosition < currPlaceCenter) ? currPlace : currPlace.nextElementSibling;

    return nextPlace;
};

places.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();

    const activePlace = places.querySelector(`.selected`);
    const currPlace = evt.target;
    const isMove = activePlace !== currPlace && currPlace.classList.contains(`place`);
    if(!isMove) return;

    const nextPlace = getNextPlace(evt.clientY, currPlace);

    if(nextPlace && activePlace === nextPlace.previousElementSibling || activePlace === nextPlace) return;

    places.insertBefore(activePlace, nextPlace);
});