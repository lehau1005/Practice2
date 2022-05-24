const pwEL = document.getElementById("pw");
const copyBtnEL = document.getElementById("copy-btn");
const lengthEL = document.getElementById("length");
const upperEL = document.getElementById("upper");
const lowerEL = document.getElementById("lower");
const numberEL = document.getElementById("number");
const symbolEL = document.getElementById("symbol");
const generateEL = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";



function getUpperCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
                   
function getlowerCase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
  
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];

}

function getSymbol(){
   return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePassword(){
    
    const lengthPW = lengthEL.value;
    let password = "";
    for(let i=0; i<lengthPW; i++){
      const  x = generate() ;
      password += x;    
      console.log(password)
        
    }
    pwEL.innerHTML = password;  
    

}
    



function generate(){
    const PwArray = [];
    if(upperEL.checked){
        PwArray.push(getUpperCase());
    }
    if(lowerEL.checked){
        PwArray.push(getlowerCase());
    }
    if(numberEL.checked){
        PwArray.push(getNumber());
    }
    if(symbolEL.checked){
        PwArray.push(getSymbol());
    }
    if(PwArray.length === 0){
        return "";
    }
    return PwArray[Math.floor(Math.random() * PwArray.length)]

    

}

generateEL.addEventListener("click", generatePassword);

copyBtnEL.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEL.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});
    

// Solution:  
// Use for ( trong khoảng length đã xác định){
//  - Create an array contains (upper,lower,number,synbol ) random
//  - Return 1 giá trị random trong array đó.
// }



