const min5 = document.getElementById('5min');
const min1 = document.getElementById('1min');
const sec5 = document.getElementById('5sec');
const sec1 = document.getElementById('1sec');

let minutesElemenet = document.getElementById('minutes')

min5.addEventListener('click', () => {
	if (minutesElemenet == 0) {
		minutesElemenet.textContent = "0" + 5;
	}
})