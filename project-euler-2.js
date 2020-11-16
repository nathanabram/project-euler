let sum = 2;
let fib1 = 1;
let fib2 = 2;
let docHeading = document.querySelector('h1');
let theButton = document.querySelector('button')
let fibsum = 0;


theButton.onclick = function() {
while (fib2 <= 4000000){
	fibsum = fib1 + fib2;
	fib1 = fib2;
	fib2 = fibsum;
	console.log(fibsum)
	if (fibsum % 2 === 0){
		sum+=fibsum;
		console.log("the sum is " + sum)
	}
}
docHeading.innerHTML = sum;}

