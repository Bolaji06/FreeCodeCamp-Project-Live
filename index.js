
const palindromeContainer = document.querySelector('.palindrome-container');
const romanContainer = document.querySelector('.roman-container');
const RomanBtn = document.querySelector('.roman');
const palindromeBtn = document.querySelector('.pali');
const themeIcon = document.querySelector('.theme-icon');
const labels = document.querySelectorAll('label');
const header = document.querySelector('h1');



themeIcon.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
});



window.addEventListener('load', ()=>{
    palindromeContainer.classList.add('active-palindrome');
})

 
RomanBtn.addEventListener('click', ()=>{
    
    romanContainer.classList.add('active-roman');
    palindromeContainer.classList.remove('active-palindrome');
   
});
palindromeBtn.addEventListener('click', ()=>{
    console.log('palbtn')
    romanContainer.classList.remove('active-roman');
    palindromeContainer.classList.add('active-palindrome');
})


