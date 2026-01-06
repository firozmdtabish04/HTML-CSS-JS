// let numbers = [1, 2, 3, 4, 5]

// numbers.forEach(cube)
// numbers.forEach(square)
// numbers.forEach(triple)
// numbers.forEach(double)
// numbers.forEach(display)

// function double(element, index, array) {
//   array[index] = element * 2;
// }
// function triple(element, index, array) {
//   array[index] = element * 3;
// }

// function square(element, index, array)
// {
//     array[index] = Math.pow(element, 2)
// }
// function cube(element, index, array)
// {
//     array[index] = Math.pow(element, 3)
// }

// function display(element)
// {
//     console.log(element)
// }



// Function to display each element
let fruits = ["Apple", "Orange", "Banana", "Coconut"];
fruits.forEach(capitalize);
// fruits.forEach(lowerCase);
// fruits.forEach(uppercase);
fruits.forEach(display);

function uppercase(element, index, array)
{
    array[index] = element.toUpperCase();
}
function lowerCase(element, index, array)
{
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array)
{
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element)
{
    console.log(element);
}