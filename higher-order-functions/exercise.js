// Challenge 1
function addTwo(num) {
	return (num+2);
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
	 return word + "s";
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  function multiplyByTwo(num) {
  return num * 2;
}
  return newArr;
}


console.log(map([1, 2, 3], multiplyByTwo));

// Challenge 4
function addTwo(num) {
    console.log (num + 2);
}

function mapWith(array, callback) {
    var plus = array.forEach(callback);
return plus
}
mapWith([9,8,7,6],addTwo)
// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function addTwo(num) {
    console.log (num + 2);
}

function mapWith(array, callback) {
    var plus = array.forEach(callback);
return plus
}
mapWith([9,8,7,6],addTwo)

//Extension 2
function reduce(array, callback, initialValue) {
  var accumulator = initialValue
  for (var i = 0 ; i < array.length ; i++) {
    accumulator = add(array[i],accumulator)
  }
  return accumulator
}
var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }

//Extension 3
function intersection(arrays) {
  var newArr = Array.from(arguments) 
  return newArr.reduce(function(accumulator,array) {
    return accumulator.filter(function(num) {
      return array.indexOf(num) !== -1
    })
  })
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
  var newArr = Array.from(arguments)
  return newArr.reduce(function(accumulator,array){
    return accumulator.concat(array.filter(function(num) {
      return accumulator.indexOf(num) === -1
    }))
  })
}
console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
