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
const boxes = document.querySelector('.box');
const item = document.querySelector('.item');

boxes.array.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault()
    })
    box.addEventListener('drop', () => {
        box.appendChild(item);
    })
});