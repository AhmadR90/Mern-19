const arrow = () => {
  console.log("hello function");
  return true;
};

const array = [1, "two", true, null, undefined, [1,2], { age: 20 }, arrow];

//call functions in array
//console.log(array[7]());

//call arrays in array
//console.log(array[5][0]);

//call objects using array

//console.log(array[6].age);

//Array Methods

//push 
array.push("new push")
//console.log(array)
//pop
array.pop()
//console.log(array)
//unshift
array.unshift("first unshift")
//console.log(array)
//shift

array.shift()
//console.log(array)
//includes

//console.log(array[5].includes(2))


//CODE BELOW CANNOT WORK AT ANY CONDITION
//console.log(array[6].includes(age))


// console.log(array.includes({ age: 20 }))

//index of

//case study of finding index of specific position in array and updating the value

// if(array.includes("two")){
// array[array.indexOf("two")]=1
// }
// console.log(array)

console.log(array)
//BETTER WAY OF ABOVE CODE

array[array.indexOf("two")>-1 ? array.indexOf("two"):array.length]=1

console.log(array)