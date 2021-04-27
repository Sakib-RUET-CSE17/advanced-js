let nums = [3, 9, 4, 5, 6, 7, 8]
    // const output = []
    // for (let i = 0; i < nums.length; i++) {
    //     const element = nums[i]
    //     const result = element * element
    //     output.push(result)
    // }
function square(element) {
    return element * element
}
// nums = nums.map(square)
// nums = nums.map(function(element, index, array) {
//     console.log(element, index, array)
// })

// nums.map((element, index, array) => console.log(element, index, array))

// const result = nums.map(x => x * x)


// console.log(result)

const bigger = nums.filter(x => x < 3) //map, filter array return kore
const isThere = nums.find(x => x > 5) //find element return kore
console.log(isThere)