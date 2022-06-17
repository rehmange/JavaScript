console.log("This is tutorial 43");

async function Abdul(){
    console.log('Inside Abdul function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

    // return "Abdul";
}

console.log("Before calling Abdul")
let a = Abdul();
console.log("After calling Abdul")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")