//import { privateEncrypt } from "crypto";

const registerButton = document.getElementById('login');

registerButton.addEventListener('click', printValues);

function printValues(event) {
    event.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    console.log(data);
}