//rest operator

//arays

const array=[1,2,3,4,5,6,7]

const [a,b,...c]=array

// console.log(a)
// console.log(b)
// console.log(c)

//objects

const obj={
    name:"Ahmad",
    age:30,
    gender:"Male"
}

const {name,...other}=obj
// console.log(other)



const rest =({name,...detail},token)=>{
    console.log(name)
    console.log(detail)
    console.log(token)

}
//rest(obj,array)

//spread operator

//Arrays
const array1=[1,2,3,4,5,6,7]
const temparr=array1;
//console.log(temparr)

temparr[5]="Any Problem"

console.log(array1)
console.log(temparr)


//objects

const obj1={
    name:"Ahmad",
    age:30,
    gender:"Male"
}









