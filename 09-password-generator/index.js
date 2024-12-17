const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");

function getPasswords() {
    passwordOneEl.textContent = generatePassword();
    passwordTwoEl.textContent = generatePassword();
}

function generatePassword() {
    let password = '';

    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

/*
Math.random()                                   0 - 0.9999999
Math.random() * characters.length               0 - 90.9999999
Math.floor(Math.random() * characters.length)   0 - 90
*/