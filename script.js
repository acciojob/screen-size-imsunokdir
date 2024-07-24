//your JS code here. If required.
let width = window.innerWidth;
let height = window.innerHeight;
const sizeInfo = document.getElementById("sizeInfo")
sizeInfo.textContent = `Width: ${width} and Height: ${height}`
window.addEventListener("resize",()=>{
	width = window.innerWidth;;
	height = window.innerHeight;
	sizeInfo.textContent = `Width: ${width} and Height: ${height}`
})