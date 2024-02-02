// Creating a JavaScript array
let myArray = [10, 20, 30]
// console.log(myArray[0])

myArray[0] = 100
// console.log(myArray)

// Adding an element to our array with the push() method
myArray.push(40)
// console.log(myArray)

// Removing an element from our array with the splice() method
myArray.splice(0, 1) // delete position, how many elements to be deleted
// console.log(myArray) // first element (100) is now removed

// Looping through our array
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index])
}