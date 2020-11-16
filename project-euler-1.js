let n = 1000;
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function findMultiples(a, b){
	let i =1;
	let multiples = [];

	while (i < n) {
	if (((i % a) === 0)||((i % b) === 0)){
		multiples.push(i);}
	i++;}
	return multiples;

}


function sumArray(params){
	let sum = 0;
	console.log(params);
	console.log(params.length)
	for (let j = 0; j < params.length; j++){
		sum += params[j];
		console.log(sum);
	}
	return sum;}



myButton.onclick = function() {
	let arrayofmultiples = findMultiples(3,5);
	myHeading.innerHTML = sumArray(arrayofmultiples);
}