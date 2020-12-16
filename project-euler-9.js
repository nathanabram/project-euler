// so here's what I'm thinking
/*
C is going to be greater than or equal to a plus b, at all times. 
and a+b+c =1000

so c + c <= 1000

c is at most 500.

If I can take every match up of the three and test each, that could work.

So it would be a for loop, from a = 500, b = 0 to a = 250, b = 250.






*/
let answer = [];
let a,b,c;

let cap = 1000;

a = 500;
b = 1;
c = 500;
for (c =500; c > 0; c--){
	if (answer.length != 0){break;}
	a = 999 -c;
	b = 1;
	reps = a;
	for (j =0; j < reps ; j++){
		if (a*a + b*b === c*c){
		answer.push(a,b,c);
		break;}
		a--;
		b++;
	}
}
console.log(answer);