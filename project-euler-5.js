/*
Every number is the product of prime numbers.
The numbers from 1 to 20 are either primes or products of primes. 
The smallest number for which each number, from 1 to 20, will divide evenly into must be the number composed of exactly each prime factor which is less than 20. 
So, to solve, find the prime numbers less than 20 and take their product. 

BUT also there are numbers from 1 to 20 which have multiples of the primes that they are composed of. So the important thing is to decompose each number under 20, and figure out for which one's there are multiple primes. 
Then have at least that many primes and no more
*/

// Need a function that returns the factors of a number:
function factorsOf(num){
	let factorTree = 1;
	let factorsArray = [];
	for (i=1; i<= num/2 && (factorTree != num); i++){
		if (num % i === 0){
			factorsArray.push(i);
			factorTree = factorTree *i;

		}
	}
	return factorsArray;
}
console.log(factorsOf(20));

// Need a function that returns the prime factors of a number:
// This code is super broken...
function primeFactorize(nums){
	let primeFactors = [];
		for (i =0; i < nums.length; i++){
			let notPrime = true;
			for (j=2; j<= nums[i]/2; j++){
				if (nums[i] % j === 0 ){
					notPrime = false;}}

		if (!notPrime){
			console.log(i + " is not a prime! ")
			primeFactors.push(factorsOf(nums[i]));
		} else {
			console.log(i + " is a prime!")
			primeFactors.push(i)}
	}
}
console.log(primeFactorize([5,20,50]));
let numbers = [];
let extras = [];
let breakk = false;

for (i=1; i<=20; i++){
	numbers.push(i);
	console.log(numbers);
	breakk=false;
	for (j=2; j<i; j++){
		if(i%j === 0 && i!=j ){
			if (!breakk){
				numbers.splice(numbers.length-1,1);
				breakk = true;
			}
			if((i/j)%j === 0){
				extras.push(j);
				console.log(extras)
			}

		}

	}
	extras.push("f");
}
let sumProduct = 1;
console.log(numbers);
for (i=0; i< numbers.length; i++){
	sumProduct = sumProduct * numbers[i];

}
console.log(extras)
console.log(sumProduct);


// This is still a WIP