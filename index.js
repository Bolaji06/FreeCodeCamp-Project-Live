
const palindromeContainer = document.querySelector('.palindrome-container');
const romanContainer = document.querySelector('.roman-container');
const cipherContainer = document.querySelector('.cipher-container');
const RomanBtn = document.querySelector('.roman');
const palindromeBtn = document.querySelector('.pali');
const cipherBtn = document.querySelector('.cipher-btn');
const themeIcon = document.querySelector('.theme-icon');
const labels = document.querySelectorAll('label');
const header = document.querySelector('h1');
const rc = document.querySelector('.rc');
const cipherRoman = document.querySelector('.cipher-roman');
const cipherPalindrome = document.querySelector('.cipher-palindrome');


themeIcon.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
});
window.addEventListener('load', ()=>{
    palindromeContainer.classList.add('active-palindrome');
})
 
RomanBtn.addEventListener('click', ()=>{
    console.log('roman');
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
    
    console.log('cipher')
});
cipherRoman.addEventListener('click', ()=>{
    cipherContainer.classList.add('active-cipher');
    palindromeContainer.classList.remove('active-palindrome');
    romanContainer.classList.remove('active-roman');
    
    console.log('cipher')
});







