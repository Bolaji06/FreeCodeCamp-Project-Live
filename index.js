
const palindromeContainer = document.querySelector('.palindrome-container');
const romanContainer = document.querySelector('.roman-container');
const cipherContainer = document.querySelector('.cipher-container');
const RomanBtn = document.querySelector('.roman');
const palindromeBtn = document.querySelector('.pali');
const cipherBtn = document.querySelector('.cipher-btn');
const labels = document.querySelectorAll('label');
const header = document.querySelector('h1');
const rc = document.querySelector('.rc');
const cipherRoman = document.querySelector('.cipher-roman');
const cipherPalindrome = document.querySelector('.cipher-palindrome');
const phoneBtn = document.querySelector('.phone-btn');
const phoneContainer = document.querySelector('.phone-container');
const phoneRoman = document.querySelector('.phone-roman');
const phoneCipher = document.querySelector('.phone-cipher');
const phonePalindrome = document.querySelector('.phone-palindrome');
const phoneRomanBtn = document.querySelector('.phone-roman-btn');
const phoneCipherBtn = document.querySelector('.phone-cipher-btn');
const cashRegisterBtn = document.querySelector('.cash-reg-btn');
const cashRegisterContainer = document.querySelector('.cash-register-container');
const romanCashBtn = document.querySelector('.roman-cash');
const cipherCashBtn = document.querySelector('.cipher-cash');
const phoneCashBtn = document.querySelector('.phone-cash');
const cashPalindromeBtn = document.querySelector('.cash-palindrome');
const cashRomanBtn = document.querySelector('.cash-roman');
const cashCipherBtn = document.querySelector('.cash-cipher');
const cashPhoneBtn = document.querySelector('.cash-phone');

cashPalindromeBtn.addEventListener('click', ()=>{
    cashRegisterContainer.classList.remove('active-register');
    palindromeContainer.classList.add('active-palindrome');
});
cashRomanBtn.addEventListener('click', ()=>{
    cashRegisterContainer.classList.remove('active-register');
    romanContainer.classList.add('active-roman');
});
cashCipherBtn.addEventListener('click', ()=>{
    cashRegisterContainer.classList.remove('active-register');
    cipherContainer.classList.add('active-cipher');
});
cashPhoneBtn.addEventListener('click', ()=>{
    cashRegisterContainer.classList.remove('active-register');
    phoneContainer.classList.add('active-phone');
});

romanCashBtn.addEventListener('click', ()=>{
    romanContainer.classList.remove('active-roman');
    cashRegisterContainer.classList.add('active-register')
});
cipherCashBtn.addEventListener('click', ()=>{
    cipherContainer.classList.remove('active-cipher');
    cashRegisterContainer.classList.add('active-register')
});
phoneCashBtn.addEventListener('click', ()=>{
    phoneContainer.classList.remove('active-phone');
    cashRegisterContainer.classList.add('active-register')
});


cashRegisterBtn.addEventListener('click', ()=>{
    console.log('cash-reg')
    cashRegisterContainer.classList.add('active-register');
    palindromeContainer.classList.remove('active-palindrome');
});

phoneCipherBtn.addEventListener('click', ()=>{
    phoneContainer.classList.remove('active-phone');
    cipherContainer.classList.add('active-cipher');
})

phoneRomanBtn.addEventListener('click', ()=>{
    phoneContainer.classList.remove('active-phone');
    romanContainer.classList.add('active-roman');
})

phonePalindrome.addEventListener('click', ()=>{
    phoneContainer.classList.remove('active-phone');
    palindromeContainer.classList.add('active-palindrome');
})

phoneRoman.addEventListener('click', ()=>{
    phoneContainer.classList.add('active-phone');
    romanContainer.classList.remove('active-roman');
})

phoneCipher.addEventListener('click', ()=>{
    phoneContainer.classList.add('active-phone');
    cipherContainer.classList.remove('active-cipher')
})

phoneBtn.addEventListener('click', ()=>{
    phoneContainer.classList.add('active-phone');
    palindromeContainer.classList.remove('active-palindrome');
    romanContainer.classList.remove('active-roman');
    cipherContainer.classList.remove('active-cipher');
    

});



window.addEventListener('load', ()=>{
    palindromeContainer.classList.add('active-palindrome');
})
 
RomanBtn.addEventListener('click', ()=>{
    
    romanContainer.classList.add('active-roman');
    palindromeContainer.classList.remove('active-palindrome');
    cipherContainer.classList.remove('active-cipher');
   
});
rc.addEventListener('click', ()=>{
    console.log('roman');
    romanContainer.classList.add('active-roman');
    palindromeContainer.classList.remove('active-palindrome');
    cipherContainer.classList.remove('active-cipher');
   
});
palindromeBtn.addEventListener('click', ()=>{
    console.log('palind');
    palindromeContainer.classList.add('active-palindrome');
    cipherContainer.classList.remove('active-cipher');
    romanContainer.classList.remove('active-roman');
});
cipherPalindrome.addEventListener('click', ()=>{
    console.log('palind');
    palindromeContainer.classList.add('active-palindrome');
    cipherContainer.classList.remove('active-cipher');
    romanContainer.classList.remove('active-roman');
});

cipherBtn.addEventListener('click', ()=>{
    cipherContainer.classList.add('active-cipher');
    palindromeContainer.classList.remove('active-palindrome');
    romanContainer.classList.remove('active-roman');
    
});
cipherRoman.addEventListener('click', ()=>{
    cipherContainer.classList.add('active-cipher');
    palindromeContainer.classList.remove('active-palindrome');
    romanContainer.classList.remove('active-roman');
});







