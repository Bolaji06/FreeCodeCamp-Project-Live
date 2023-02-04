
const resetBtn = document.querySelector('.button-reset');
let palindromeInput = document.getElementById('word-input');
const checkerBtn = document.querySelector('.checker')
const displayResult = document.getElementById('display-result');
const displayWord = document.querySelector('.entered-word-display');

function palindromeChecker(str){
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const stringToArray = str.split('');
    const resverseArray = stringToArray.reverse();
    const resverseArrToString  = resverseArray.join(''); 

    if (str === resverseArrToString){
        displayResult.textContent = 'It is a palindrome';
        
    }
    else {
        displayResult.textContent = 'It is not a palindrome';  
    }
}
function checkPalindrome(){
    let getValue = palindromeInput.value
    palindromeChecker(getValue);
    displayWord.textContent = palindromeInput.value;
}
checkerBtn.addEventListener('click', ()=>{
    checkPalindrome();
});

window.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter'){
        checkPalindrome();
    }
});

resetBtn.addEventListener('click', clearInput);

function clearInput(){
    const inputValue = document.getElementById('word-input');
    if (inputValue.value != ''){
       inputValue.value = '';
       displayResult.textContent = '';
       displayWord.textContent = '';

    }
   
}


