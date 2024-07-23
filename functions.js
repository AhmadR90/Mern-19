//function declaration
// evenOdd(1,2)
function evenOdd(p1, p2) {
  console.log("p1->:", p1);
  console.log("p2->:", p2);
}

//evenOdd();//undefined , undefined
//const ref=evenOdd(1,2)//function is passed to the constant as a refrence here

//function expression ,function refrence

const palindrome = function (p1, p2) {
  console.log("p1->:", p1);
  console.log("p2->:", p2);
};
// palindrome(1)

//function by default parmeters

function hi(p1 = 6, p2 = 3) {
  console.log(p1, p2);
}
//hi(2);

//arrow function also anonymous funtion(no name)
const arrow1 = (p1 = 3, p2 = 2) => {
  p1 % 2 == 0 ? console.log(`${p1} is even`) : console.log(`${p1} is odd`);
  p2 % 2 == 0 ? console.log(`${p2} is even`) : console.log(`${p2} is odd`);
};

//arrow1();

const arrow = (p1 = 7, p2 =4) => {
  p1 % 2 == 0 ? console.log(`${p1} is even`) : console.log(`${p1} is odd`);
  p2 % 2 == 0 ? console.log(`${p2} is even`) : console.log(`${p2} is odd`);
};
arrow()

//IIFE function
// ((params) => {
//   console.log("hello");
// })();
