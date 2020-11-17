
function isPalendrome(numberValue){
	let number = numberValue.toString();
		for (i=0; i < number.length/2; i++){
			if (number.charAt(i) != number.charAt(number.length-i-1)) {
				return false;
			}
		}
		return true;
}

let n1 = 999;
let n2 = 999;
let product = 10; //can't be zero since zero is a palendrome
let biggestPal = 10; // ditto ^
let z =0;
while (n1*n2 > biggestPal){
	product = n1*n2
	while (!isPalendrome(product)){
	n1=n1-1;
	product = n1*n2;
	}
	if (product>=biggestPal){
		biggestPal = product;
	}
	n2 = n2 -1;
	n1 = 999-z;
	z++;
}
console.log(biggestPal);