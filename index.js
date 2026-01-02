const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("password_one")
let passwordTwo = document.getElementById("password_two")
let passwordButton = document.getElementById("password_button")

function generateRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

let passwordLen = 15

function generateRandomPassword() {
    let randomPass = ""
    for(let i = 0 ; i <= passwordLen ; i++){
        randomPass += generateRandomCharacter()
    }
    return randomPass
}
passwordButton.addEventListener("click",function(){
    passwordOne.textContent = generateRandomPassword()
    passwordTwo.textContent = generateRandomPassword()
})


 