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

let numbers = [];
let extras = [];
let breakk = false;

for (i=1; i<=20; i++){
	numbers.push(i);
	breakk=false; //This will get set to true if the number is not a prime, so that this whole thing goes a bit faster.
	for (j=2; j<i; j++){ //Starts at 2 and goes to i/2
		if(i%j === 0 && i!=j ){ // If j is a factor of i
			if (!breakk){ // and break has not been pulled yet
				numbers.splice(numbers.length-1,1); // Then, splice the last element of the array (works because at the start of the thing we "pushed" i) 
				breakk = true; //Set break equal to true, which skipps this code for each j from here on. (Divisible by any j means its not prime, so don't need it in array)
			}
		}
		if(((i)%(j*j) === 0) && (j != 0)){  // This is the part that is clunky. What I need to do is figure out how to get the extra prime factors that are important out of a given number. These are mostly squares of primes. Maybe I can just look for where there are squares of primes.
				extras.push(j);
			} // Now, this bit of code will run well -- whenever something is not a prime, it will be bumped. 
	}
}
let extraFactorToSearch4 = 1;
for (i = 1; i < extras.length; i++){
	extraFactorToSearch4 = i;
	extras.splice(i-1, 1);
	if (!extras.includes(extraFactorToSearch4)){
		numbers.push(extraFactorToSearch4);
	}

}

let sumProduct = 1;
for (i=0; i< numbers.length; i++){
	sumProduct = sumProduct * numbers[i];

}

for (i =20; i > 0; i --){
	if (sumProduct%i != 0){ // If the product is not divisible by one of the numbers, 
		let breaker = false;
		for (j = 2; j < i/2; j++){
		if ((sumProduct*j)%i === 0 &&(!breaker)){ // check to see if the sum needs an extra factor of j, starting from the smallest possible j
			sumProduct=sumProduct*j; // if it is, multiply that factor in
			breaker = true; // Now, the product is divisible by the number, so no need to keep checking other factors. 
		}

		}
	}
}
console.log(sumProduct);


// This is still a WIP