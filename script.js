//your code her
let input = document.getElementById("evaluatedText");
let heading = document.getElementById("letterCount");

function change(){
	let num = input.value.length;
	heading.innerText = num;
}

input.onchange = change;

