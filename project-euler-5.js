/*
Every number is the product of prime numbers.
The numbers from 1 to 20 are either primes or products of primes. 
The smallest number for which each number, from 1 to 20, will divide evenly into must be the number composed of exactly each prime factor which is less than 20. 
So, to solve, find the prime numbers less than 20 and take their product. 

BUT also there are numbers from 1 to 20 which have multiples of the primes that they are composed of. So the important thing is to decompose each number under 20, and figure out for which one's there are multiple primes. 
Then have at least that many primes and no more
*/
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