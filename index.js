const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePsswd() {
    let paswd1 = ""
    let paswd2 = ""
    for (let i=0;i<16;i++) {
        paswd1 += characters[getRndChar()]
        paswd2 += characters[getRndChar()]
    }
    document.getElementById("psswd1-el").value = paswd1
    document.getElementById("psswd2-el").value = paswd2
    
}

function getRndChar() {
    let isChecked = document.getElementById("specialCharacters").checked
    if (!isChecked) {
        return Math.floor(Math.random() * 62)
    } else {
        return Math.floor(Math.random() * characters.length)
    }
}


