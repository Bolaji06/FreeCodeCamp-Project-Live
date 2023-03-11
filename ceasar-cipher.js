
const cipherThemeIcon = document.querySelector('.icon-cipher');
const cipherInput = document.querySelector('#cipher-input');
const decodeBtn = document.querySelector('.decode-btn');
let cipherResult = document.getElementById('display-result-cipher');
const enteredCipherWord = document.querySelector('.entered-word-display-cipher');
const cipherResetBtn = document.querySelector('.reset-cipher');

cipherThemeIcon.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme')
});

const CHARACTER_CHART = {
    'A': 'N',
    'B': 'O',
    'C': 'P',
    'D': 'Q',
    'E': 'R',
    'F': 'S',
    'G': 'T',
    'H': 'U',
    'I': 'V',
    'J': 'W',
    'K': 'X',
    'L': 'Y',
    'M': 'Z',
    'N': 'A',
    'O': 'B',
    'P': 'C',
    'Q': 'D',
    'R': 'E',
    'S': 'F',
    'T': 'G',
    'U': 'H',
    'V': 'I',
    'W': 'J',
    'X': 'K',
    'Y': 'L',
    'Z': 'M',
    
}

function rot13(str){
        let convertedString = '';
        if (/^[a-zA-Z?/.,-_@! ]*$/.test(str)){
            for (let i = 0; i < str.length; i++){
                const character = str[i].toUpperCase();
                let convertedCharacter = '';

                if (/[a-z]/i.test(character)){
                    convertedCharacter = CHARACTER_CHART[character];
                }
                else {
                    convertedCharacter = character;
                }
                convertedString += convertedCharacter;
            }
        }  
        
    return (cipherResult.textContent = convertedString);
}
  
decodeBtn.addEventListener('click', ()=>{
    let getValue = cipherInput.value;
    rot13(getValue);
    enteredCipherWord.textContent = getValue; 
    
});
function clearInput(){
    
    if (cipherInput.value != ''){
       cipherInput.value = '';
       enteredCipherWord.textContent = '';
       cipherResult.textContent = '';

    }
   
}
cipherResetBtn.addEventListener('click', ()=>{
    clearInput();
    
})




