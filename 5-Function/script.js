// function happyBirthday(username, age)
// {
//     console.log("Happy Birthday to you..")
//     console.log("Happy Birthday to you..")
//     console.log(`Happy Birthday to you.. ${username}`)
//     console.log(`You are ${age} years old.`)
// }
// happyBirthday("Tabish", 21)
// happyBirthday("Tabish", 34)


// function add(x, y)
// {
//     // let result = x +y;
//     // let result = x -y;
//     let result = x *y;
//     return result;
// }
// console.log(add(2, 323))
// function sub(x, y)
// {
//     let result = x - y;
//     return result
// }
// console.log(sub(23,34))

// function mul(x, y)
// {
//     let result = x * y
//     return result
// }
// console.log(mul(2,4))


// Is Even Number
// function isEven(number)
// {
//     if (number % 2 === 0)
//     {
//         console.log(number, " is an EVEN.");
//     }
//     else
//     {
//         console.log(number, " is not Even it is a an ODD Number");
//     }
// }
// console.log(isEven(9))


// function isEven(number)
// {
//     return number % 2 === 0 ? true : false;
// }
// console.log(isEven(9))


// To check email is valid or not
// function isEmailValid(email)
// {
//     if (email.includes("@"))
//     {
//         return "Email is valid go ahead."
//     }
//     else
//     {
//         return "Email is not Valid try again."
//     }
// }
// console.log(isEmailValid("tabish04@"))

function isEmailValid(email)
{
    return email.includes("@") ? true : false
}
console.log(isEmailValid("mdgamil.com"))