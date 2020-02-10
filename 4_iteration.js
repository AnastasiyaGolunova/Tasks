"use strict";

/*
function sum(...args){
	let start = 0;
	for(let i of args){
		start += i;
	}
	return start;
}

console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));
*/


/*
function sum(...args){
	let start = 0;
	while(args.length > 0){
		start += args.pop();
	}
	return start;
};

console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));
*/


/*
function sum(...args){
	let sum = args.reduce(function(a, b){
		return a + b;
	}, 0);
	return sum;
}

console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));
*/


/*
function sum(...args){
	if (args.length === 0) return 0;
	let start = 0;
	do{
		start += args.pop();
	} while(args.length > 0);
	return start;
};

console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));
*/



/*
function sum(...args){
	let start = 0;
	for(let i = 0; i < args.length; i++){
		start += args[i];
	}
	return start;
}

console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));
*/


// iteration on array

// const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// const out_array = [];
// function getMaxNumber(m){
// 	m.forEach(function(v) {
//   	Array.prototype.push.apply(out_array, v);
// });
// 	return Math.max.apply(null, out_array);
// }
// console.log(getMaxNumber(m));

const max = matrix => {
  let value = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (value < cell) value = cell;
    }
  }
  return value;
};


// const persons = {
//   lenin: { born: 1870, died: 1924 },
//   mao: { born: 1893, died: 1976 },
//   gandhi: { born: 1869, died: 1948 },
//   hirohito: { born: 1901, died: 1989 },
// };

// const ages = persons => {
//   const data = {};
//   for (const name in persons) {
//     const person = persons[name];
//     data[name] = person.died - person.born;
//   }
//   return data;
// };

// console.log(ages(persons));

