"use strict";

/*
const random = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(random(0, 10));
//module.exports{random};
*/

/*
const generateKey = (length, possible) => {
	const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	return characters.slice(0, 16);
};
console.log(generateKey(generateKey()));
//module.exports = { generateKey };
*/

/*
const generateKey = (length, possible) => {
  const base = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    key += possible[index];
  }
  return key;
};

console.log(generateKey(16, 'abcdefghijklmnopqrstuvwxyz0123456789'));
*/


  // Parse ip address as string, for example '10.0.0.1'
  // to ['10', '0', '0', '1'] to [10, 0, 0, 1]
  // and convert to Number value 167772161 with sitwise shift
  // (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
  // Use Array.prototype.reduce of for loop

/*
const ipToInt = (ip) => { 
	const fn = (res, item) => (res << 8) + parseInt(item);
	return ip.split('.').reduce(fn, 0);		
};

console.log(ipToInt('127.0.0.1'));
*/

/*
const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}


function a(iface){
const names = [];
for ( let key in iface){
	const fn = iface[key];
	if (typeof fn === 'function'){
		names.push([key, fn.length]);
	}
}
return names;
};

console.log(a(iface));
*/

