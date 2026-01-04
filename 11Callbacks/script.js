// function hello(callback) {
//   console.log("Hello");
//   callback(); // This executes the function you passed in
// }

// function wait() {
//   console.log("Wait");
// }

// hello(wait);

sum(displaypage, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayConsole(result) {
  console.log(result);
}
function displaypage(result) {
  document.getElementById("myH1").textContent = result;
}
