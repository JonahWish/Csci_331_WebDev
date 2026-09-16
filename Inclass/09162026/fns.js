function nextCount(rawCount){
    val = Number(rawCount) + 1;
    return val
}

function sumAndProduct(a,b){
    const sum = a+b;
    const product = a*b;
    return[sum,product]
}
const result = sumAndProduct(3,4)
console.log(typeof(result))
console.log(result)

//array destructuring
const [s,p] = result;
console.log('s is: ', s)
console.log('p is: ', p)

const colors = ["red", "green", "blue"];
let [first,second,third] = colors;
console.log(third);//blue
[first, ...rest] = colors

console.log(first);
console.log(rest);

const squareArrow = (x) => {
    return x*x;
};
console.log(squareArrow(4))

const squareShort = x => x*x;
console.log(squareShort(5)); //25





answer = nextCount("3");
console.log(answer); //4

//function expression
const multiply = function(a,b){
    return a*b;
}


const nums = [1,2,3]
const doubled = nums.map(n=>n*2);

console.log(nums)
console.log(doubled)