const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordElOne = document.querySelector("#pass-1")
let passwordElTwo = document.querySelector("#pass-2")

    let charactersSize = 15

    function randomChar(){
        let randomChar1 = Math.floor( Math.random() * characters.length)
        return characters[randomChar1]
    }

    function randomPass(){
        let randomPassword = ""
        for(let i = 0; i < charactersSize; i++){
            randomPassword += randomChar()
        }
        return randomPassword
    }

    function start(){
        passwordElOne.textContent = randomPass()
        passwordElTwo.textContent = randomPass()
    }
    