function greet() {
    let name = prompt('what is your name?');
    console.log('welcome to our website ' + name);
}

greet();
//function invocation 

//function that asks a user name and city

function cityName() {
    let city = prompt ('what city are you from');
    console.log('welcome to ' + city);
}

cityName();

//

function signUp() {
    let name = prompt('enter your name');
    console.log('welcome to our website ' + name);
}

signUp();

Math.random();

Math.max(1, 5);

let maxNmb = Math.max(1, 5);
console.log(maxNmb);

function max(nmb1, nmb2) {
    if(nmb1 > nmb2 ) {
        return nmb1;
    } else {
        return nmb2;
    }
}

let inbox = max(1, 5);
console.log(inbox);