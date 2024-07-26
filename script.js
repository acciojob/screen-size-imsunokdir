
const sizeInfo = document.getElementById("sizeInfo");
let width = window.innerWidth;
let height = window.innerHeight;

sizeInfo.textContent = `Width: ${width} and Height: ${height}`

window.addEventListener('resize', () => {
	width = window.innerWidth;
	height = window.innerHeight;
	sizeInfo.textContent = `Width: ${width} and Height: ${height}`
	console.log()
});