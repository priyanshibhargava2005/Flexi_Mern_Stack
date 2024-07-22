// function outer() { 
//     console.log("This is Outer");
//     function inner() { 
//         console.log("This is Inner");
//     }
//     return inner
// }

const add = (function () {
    let counter = 0;
    return function () { counter += 1; return counter }
})();

console.log(add());
console.log(add());
console.log(add());