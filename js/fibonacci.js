// const fibonacci = (num) => {
//     let arr=[0,1]
//     for (let i=0;i<num;i++) {
//         arr.push((arr[i]+arr[i+1]))
//     }
//     return arr[num]
// }

// // console.log(fibonacci(7))
// module.exports = {fibonacci}


//Recursion example:

const fibonacci = (num) => {
    if (num===1) {
        return 1
    }
    if (num===2) {
        return 1
    }
    return fibonacci(num-1) + fibonacci(num-2)
}

console.log(fibonacci(7))
// module.exports = {fibonacci}


