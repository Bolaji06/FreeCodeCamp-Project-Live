
const phoneTheme = document.querySelector('.phone-theme');
const phoneInput = document.getElementById('phone-input');
const phoneCheckBtn = document.querySelector('.phone-check');
const displayResultPhone = document.getElementById('display-result-phone');
const phoneError = document.querySelector('.phone-error');
const enteredWordPhone = document.querySelector('.entered-word-phone');
const resetPhoneBtn = document.querySelector('.reset-phone');

phoneTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme')
});

function telephoneCheck(str){

    const regex1 = /^\d{3}-\d{3}-\d{4}$/;
    const regex2 = /^\(\d{3}\)\d{3}-\d{4}$/;
    const regex3 = /^\d{3}\s\d{3}\s\d{4}$/;
    const regex4 = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    const regex5 = /^\d{10}$/;
    const regex6 = /^[1] \d{3}\s\d{3} \d{4}/;
    const regex7 = /^[1]\(\d{3}\)\d{3}-\d{4}/;
    const regex8 = /^[1]\s\d{3}-\d{3}-\d{4}/;
    const regex9 = /^[1]\s\(\d{3}\)\s\d{3}-\d{4}$/;

    const regexList = [regex1, regex2, regex3, regex4, 
        regex5, regex6, regex7, regex8, regex9];

    for (let regex of regexList){
        if (regex.test(str)){
            return displayValidNumber();
        }
    }
    return displayInvalidNumber();
}

function displayValidNumber(){
   phoneInput.classList.remove('error-check');
   phoneError.style.display = 'none';
   return displayResultPhone.textContent = 'Valid U.S Number';

}
function displayInvalidNumber(){
    errorMsgPhone()
    return displayResultPhone.textContent = 'Invalid U.S Number';
}
function errorMsgPhone(){
    phoneInput.classList.add('error-check');
    phoneError.style.display = 'block';
    phoneError.textContent = 'Enter valid number'
    phoneError.classList.add('error-msg-ani');
}

// function validatePhoneNumber(str){
//     if (/^[0-9-() ]$/.test(str)){
//         telephoneCheck(str);
//      }
// }
phoneCheckBtn.addEventListener('click', ()=>{
    let getValue = phoneInput.value;
        telephoneCheck(getValue);
        enteredWordPhone.textContent = getValue;
        console.log(telephoneCheck(getValue));
    
});
function resetInput(){
    
    if (phoneInput.value !== ''){
        phoneInput.value = '';
    }
    displayResultPhone.textContent = ''
    enteredWordPhone.textContent = '';

}
resetPhoneBtn.addEventListener('click', ()=>{
    resetInput();
})

    