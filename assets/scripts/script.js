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
const rulBtn2 = document.getElementById('rulBtn2');
const rules = document.getElementById('rules');

rulBtn.addEventListener("click", rulOpen);
rulBtn2.addEventListener("click", rulOpen);

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