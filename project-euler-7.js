let primes = [];
let breaker = false;

for (i =2; primes.length <10001; i++){
	breaker = false;
	for (j =2; j < i; j++){
		if (i%j===0){
			breaker = true;
			break;
		}
	}
	if (!breaker){
		primes.push(i);
	}
}
console.log(primes[primes.length-1]);
