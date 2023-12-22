// const array = [0, [1,2,"str"], ["string"], [1,2, [5,6]]]

// function numberArr(params) {
//     return params.reduce((a, c) => {
//         if (Array.isArray(c)) {
//             return a.concat(numberArr(c))
//         }
//         if (typeof c === "number") {
//             return a.concat(c)
//         }
//         return a
//     }, [])
// }

// console.log(numberArr(array))
let h = {1: 2, 2: 1, 3: 2, 4: 1}

function c(h) {
    let x = {1: 3, 2: 6, 3: 2, 4: 9};
    return (Object.values(x)).concat(Object.values(h))
}
console.log(c(h))