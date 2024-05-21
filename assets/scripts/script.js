window.onbeforeunload = function() {
	return true;
};

const newGameBtn = document.getElementById('newGame');
const modal = document.getElementById('modal');

newGameBtn.onclick = function() {
    modal.style.display = "none";
}