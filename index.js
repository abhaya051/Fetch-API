// fetch API(Application Programming Interface)-----------------------------------------------------------------------------------------
// The JavaScript fetch() method is used to fetch resources from a server.
// It returns a Promise that resolves to the Response object representing
// the response to the request.
// It Uses Request And Response Object
// The fetch Method Is Used to Fetch A Data
// ---------------------------------------------------------------------------------------------------------
// Request ----------API-------------Response

// Syntax
// let promise = fetch(url,[options])

// let url = "https://dogapi.dog/api/facts";
// let promise = fetch(url);
// console.log(promise);

//async API
// let url = "https://dogapi.dog/api/facts";
// let pro = async () => {
//   let response = await fetch(url);
//   console.log(response);
// };
// console.log(pro());

//Understanding Terms
// AJAX is Asynchoronous JS & XML
// JSON IS JON Javascript Object Notation
//Method
// json() This Gives Us JSON File Into JS Object
// API-------When You Request To API It Give You Response In The Form Of JSON And
// We Coverted JSON Into JS Object(Usable Format)

let url = "https://dogapi.dog/api/facts";
let pro = async () => {
  let response = await fetch(url);
  console.log(response);
  let getData = await response.json();
  console.log(getData);
};

// let promise = fetch(url);
// let url = "https://meowfacts.herokuapp.com/";
// let pro = async () => {
//   let promise = await fetch(url);
//   console.log(promise);
//   let data = await promise.json();
//   console.log(data);
// };
