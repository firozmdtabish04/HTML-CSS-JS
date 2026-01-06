// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(fruits, "ap"));

// console.log(filterItems(fruits, "an"));

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"]

const shortWords = words.filter(getShortWords)
const longWords = words.filter(getLongWords )

console.log(longWords)

function getShortWords(element)
{
    return element.length <= 6;
}

function getLongWords(element)
{
    return element.length > 6;
}

