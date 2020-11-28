let stopNum = 100;
let nums  = [];
for (i = 1; i<=stopNum; i++){
	nums.push(i);
}
let squaresAdded = 0;
for (i =0; i< nums.length; i++){
	squaresAdded = squaresAdded + nums[i]*nums[i];
}
console.log(squaresAdded);

let addedSquare = 0; // add a var to hold the number defined as (n1 + n2 + ...)^2
for (i = 0; i< nums.length; i++){
	addedSquare = addedSquare + nums[i];
}
addedSquare = addedSquare *addedSquare;
console.log(addedSquare -squaresAdded);