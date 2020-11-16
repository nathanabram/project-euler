let num = 600851475143;
let factors =[];
let biggestFactor=num;
for (i=0; i < biggestFactor; i++){
	if (num % i === 0){
		factors.push(i);
		factors.push(num/i);
		biggestFactor = num/i;
	}
}

for (i=0; i < factors.length; i++){
	for (j=0; j < factors[i]; j++){
		if (factors[i] % j === 0 && j != 1 && j != i){
			factors.splice(i, 1, 0);
		}
	}
}
let primes = [];
for (i =0; i < factors.length; i++){
	if (factors[i] != 0){
		primes.push(factors[i])
	}
}
console.log(primes[primes.length -1]);