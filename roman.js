


const convertBtn = document.querySelector('.convert');
const romanResult = document.getElementById('display-result-roman');
const resetBtnRoman = document.querySelector('.reset-roman');
const numberInput = document.getElementById('number');
const enteredDisplay = document.querySelector('.entered-word-display-roman');
const errorMsg = document.querySelector('.error-msg');
const themeIconRoman = document.querySelector('.theme-roman');

// Icon to change to toggle between theme (light / black)
themeIconRoman.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
})

// Number to Roman Numeral Conversion Function
function convertToRomanNumeral(num){
    const romanData = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let result = '';
    for (let i in romanData){
        while (num >= romanData[i]){
            result += i;
            num -= romanData[i];
        }    
    }
    return (romanResult.textContent = result);
}


function convertRoman(){
    const getValue = numberInput.value;
    
    if (/^\d+$/.test(getValue)){ // Test to check for input digits only
        convertToRomanNumeral(getValue);
        enteredDisplay.textContent = getValue;
        numberInput.classList.remove('error-check');
        errorMsg.style.display = 'none';
    }else {
        // Perform validation action if input doesn't match reccomended input value
         errorMsg.innerText = 'Enter valid number';
        // numberInput.insertAdjacentElement('afterend',  errorMsg);
        numberInput.classList.add('error-check');
        errorMsg.classList.add('error-msg-ani');
        errorMsg.style.display = 'block';
        clearInputRoman();
    }
}
// Remove added error classes
function removeError(){
    numberInput.classList.remove('error-check');
    errorMsg.classList.remove('error-msg-ani');
}
removeError();
// Reset or clear input field and display result
function clearInputRoman(){
    let getValue = document.getElementById('number');
    if (getValue.value != ''){
        getValue.value = '';
    }
    enteredDisplay.textContent = '';
    romanResult.textContent = '';
    

    console.log('reset')
}

resetBtnRoman.addEventListener('click',()=>{
    clearInputRoman();
});
convertBtn.addEventListener('click', convertRoman);
