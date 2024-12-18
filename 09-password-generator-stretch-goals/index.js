const btnPassword = document.getElementById("btn-password");

btnPassword.addEventListener("click", function() {
    const length = Number(document.getElementById("length-input").value);
    if (!validateLengthInput(length)) return;
    document.getElementById("length-alert").style = "none";

    const useNumbers = document.getElementById("toggle-numbers").checked;
    const useSymbols = document.getElementById("toggle-symbols").checked;

    const passwordOneEl = document.getElementById("password-one");
    const passwordTwoEl = document.getElementById("password-two");
    passwordOneEl.textContent = generatePassword(length, useNumbers, useSymbols);
    passwordTwoEl.textContent = generatePassword(length, useNumbers, useSymbols);
});

function generatePassword(length, useNumbers, useSymbols) {
    let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

    if (useNumbers && !useSymbols) {
        characters = characters.slice(0, 62);
    } else if (!useNumbers && useSymbols) {
        characters = characters.slice(0, 52).concat(characters.slice(62, 91));
    } else if (!useNumbers && !useSymbols) {
        characters = characters.slice(0, 52);
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

function validateLengthInput(length) {
    if (length > 30 || length < 15) {
        document.getElementById("length-alert").style = "color: #dc0707";
        return false;
    }

    return true;
}