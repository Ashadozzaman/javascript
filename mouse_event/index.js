//mouseclick
//mousedblclick
//mousedown
//mouseup
//mouseenter
//mouseleave
//mousemove
//mouseover
const varname =  document.querySelector('#mouse');
// varname.addEventListener('dblclick',function(){
//   alert('dblclick');
// })
const buttons = document.querySelectorAll('.btn');
var Array = Array.from(buttons);
Array.map((button) => {
	button.addEventListener("click",function(e){
		console.log(e.target.innerText);
	})
})