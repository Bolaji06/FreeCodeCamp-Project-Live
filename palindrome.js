
const themeIcon = document.querySelector('.theme-icon');
const resetBtn = document.querySelector('.button-reset');
let palindromeInput = document.getElementById('word-input');
const checkerBtn = document.querySelector('.checker')
const displayResult = document.getElementById('display-result');
const displayWord = document.querySelector('.entered-word-display');
const paliErrorMsg = document.querySelector('.error-pal');



themeIcon.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
});
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

    if (getValue !== ''){
        palindromeChecker(getValue);
        displayWord.textContent = getValue;
        palindromeInput.classList.remove('error-check');
        paliErrorMsg.style.display = 'none';
    }
    else{
        palindromeInput.classList.add('error-check');
        paliErrorMsg.textContent = 'Input is empty';
        paliErrorMsg.style.color = 'red';
    }

}
checkerBtn.addEventListener('click', ()=>{
    checkPalindrome();
});

window.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter'){
        checkPalindrome();
    }
});


function clearInput(){
   
    if (palindromeInput.value != ''){ 
       palindromeInput.value = '';
       displayResult.textContent = '';
       displayWord.textContent = '';

    } 
}
resetBtn.addEventListener('click', clearInput);

