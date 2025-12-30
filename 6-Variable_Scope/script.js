
// Variable Scope:
// determines the accessibility and visibility of variables in different parts of the code(local vs global)
    
// Local variables exist only within the function or block where they're defined, with a short lifespan (created when the block starts, destroyed when it ends).

// Global variables are declared outside functions, accessible from anywhere in the program, and live for the program's entire duration.

let y = 3;
let x = 8;
function1()
function2()
function function1()
{
    console.log(y);
}

function function2()
{
    console.log(x);
}