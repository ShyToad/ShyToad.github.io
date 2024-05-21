window.onbeforeunload = function() {
	return true;
};

const newGameBtn = document.getElementById('newGame');
const modal = document.getElementById('modal');

newGameBtn.onclick = function() {
    modal.style.display = "none";
}

//Menu (w < 960)
const navBtn = document.getElementById('navBtn');
const navv = document.getElementById('navv');
navBtn.onclick = function() {
    if(navBtn.value == "cl") {
        navBtn.value = "open";
        navv.style.display = "grid";
    } else {
        navBtn.value = "cl";
        navv.style.display = "none";
    }
}
