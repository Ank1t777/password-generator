const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let getBtn = document.getElementById("Generate");

let passwordOneEl = document.getElementById("password-1");
let passwordTwoEl = document.getElementById("password-2");



getBtn.addEventListener('click', function()
{
    let passwordOne = "";
    let passwordTwo = "";

    let getPasswordLength = document.getElementById("numberInput").value;

    for(let i = 0; i < getPasswordLength; i++)
    {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let randomIndexOne = Math.floor(Math.random() * characters.length);
        passwordOne += characters[randomIndex];
        passwordTwo += characters[randomIndexOne];
    }

    passwordOneEl.textContent = passwordOne;
    passwordTwoEl.textContent = passwordTwo;

    passwordOneEl.addEventListener('click', function() {
        copyToClipboard(passwordOne);

    passwordTwoEl.addEventListener('click', function() {
        copyToClipboard(passwordTwo);
    })
    })
    
});

function copyToClipboard(text) 
{
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard:', text);
            alert('Password copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy password to clipboard!');
        });
}