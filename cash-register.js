
const cashThemeIcon = document.querySelector('.cash-theme');
const popUpButton = document.querySelector('.close-popup-btn');
const viewCidContainer = document.querySelector('.view-cid-container');
// const viewBtn = document.querySelector('.view-btn');
const cidPopUp = document.querySelector('.cid-pop-up');
const cidTextAmount = document.querySelector('.cid-text');
const refundBtn = document.querySelector('.refund-btn');
const dollarSign = document.querySelector('.dollar-sign');
const priceInput = document.getElementById('price-input');
const cashInput = document.getElementById('cash-input');
const displayStatus = document.getElementById('display-status');
const displayChange = document.getElementById('display-change');
const cur = document.querySelectorAll('.cur');
const CheckBtn = document.getElementById('cash-check');
const resetCashReg = document.querySelector('.reset-cash-reg');
const cashError = document.querySelector('.cash-error');

cashThemeIcon.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
});

resetCashReg.addEventListener('click', ()=>{
  priceInput.value = '';
  cashInput.value = '';
  displayChange.textContent = '';
  displayStatus.textContent = '';
})


penny = Math.random() * 10;
penny = penny.toFixed(2);
penny = parseFloat(penny);

nickel = Math.random() * 10;
nickel = nickel.toFixed(2);
nickel = parseFloat(nickel);

dime = Math.random() * 10;
dime = dime.toFixed(2)
dime = parseFloat(dime); 

quater = Math.random() * 10;
quater = quater.toFixed(2);
quater = parseFloat(quater);

one = Math.random() * 101;
one = one.toFixed(0) 
one = parseInt(one);

five = Math.random() * 101;
five = five.toFixed(0);
five = parseFloat(five);

ten = Math.random() * 101;
ten = ten.toFixed(0) 
ten = parseInt(ten);

twenty = Math.random() * 101;
twenty = twenty.toFixed(0);
twenty = parseInt(twenty);

hundred = Math.random() * 101;
hundred = hundred.toFixed(0);
hundred = parseInt(hundred);


let cid = [
  ['PENNY', penny],
  ['NICKEL', nickel],
  ['DIME', dime],
  ['QUATER', quater],
  ['ONE', one],
  ['FIVE', five],
  ['TEN', ten],
  ['TWENTY', twenty],
  ['HUNDRED', hundred]
];


  function checkCashRegister(){
   
      const UNIT_AMOUNT = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.10,
        'QUARTER': 0.25,
        'ONE': 1.00,
        'FIVE': 5.00,
        'TWENTY': 20.00,
        'ONE HUNDRED': 100.00
      }
  let totalCID = 0;

  console.log(UNIT_AMOUNT.PENNY)

  for (let element of cid){
    totalCID += element[1];
  }
  let changeToGive = cashInput.value - priceInput.value;
  totalCID = totalCID.toFixed(2);
  const changeArray = [];

  if (changeToGive > totalCID){
    displayStatus.textContent = 'INSUFFIECIENT FUNDS';
    displayChange.textContent = '[ ]';
  }

  else if (changeToGive.toFixed(2) == totalCID){
    displayStatus.textContent = 'CLOSED';
    displayChange.textContent = cid;
  }

  else {
    cid = cid.reverse();

    for (let elem of cid){
      let temp = [elem[0], 0];

      while(changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0){
        temp[1] += UNIT_AMOUNT[elem[0]];
        elem[1] -= UNIT_AMOUNT[elem[0]];
        changeToGive -= UNIT_AMOUNT[elem[0]];
        changeToGive = changeToGive.toFixed(2);
      }

      if (temp[1] > 0){
        changeArray.push(temp);
      }
    }
    displayStatus.textContent = 'OPEN';
    displayChange.textContent = changeArray;
  }

}
CheckBtn.addEventListener('click', ()=>{
  checkValidation();
  //updateCID();
});

function checkValidation(){
  const regex = /^[0-9\.]+$/;


  
  if (regex.test(cashInput.value) && regex.test(priceInput.value)){
    cashError.style.display = 'none';
    checkCashRegister();
 
    if (cashInput.value < priceInput.value){
      cashError.style.display = 'block';
      cashError.textContent = 'Cash is less than product price';
      displayStatus.textContent = '';
    }
    
  }
   
  else if (priceInput.value === "" || cashInput.value === ""){
    cashError.style.display = 'block';
    cashError.textContent = 'Fill out the inputs';
  }
  else {
     cashError.style.display = 'block';
     cashError.textContent = 'Inputs should be numeric'
  }
  
 
}

let totalCid = 0;
const cidList = [penny, nickel, dime, quater, one, five, ten, twenty, hundred];
        totalCid = cidList.reduce((acc, cur) =>{
            return acc + cur;
        }, 0);
        totalCid = totalCid.toFixed(2);

    function totalCID(){
        cidTextAmount.textContent = totalCid;
        dollarSign.textContent = '$'

        createCIDPopUp();
      }
refundBtn.addEventListener('click', totalCID);

function createCIDPopUp(){
   
    return(
        viewCidContainer.innerHTML = `
        <div class="cid-pop-up">
        <div class="header-popup">
         <h3 class="pop-up-text">Cash in drawer</h3>
         <img src="assets/icons8-close-window-48.png" 
         alt="close popup buttton" class="close-popup-btn"
         onClick="document.querySelector('.cid-pop-up').style.display = 'none'">
        </div>
        <div class="cid-list-wrapper">
            <div class="cid-list-row">
                <div class="currency-list">
                    <p class="cur">Penny</p>
                    <p class="cur">Nickel</p>
                    <p class="cur">Dime</p>
                    <p class="cur">Quater</p>
                    <p class="cur">One Dollar</p>
                    <p class="cur">Five Dollar</p>
                    <p class="cur">Ten Dollar</p>
                    <p class="cur">Twenty Dollar</p>
                    <p class="cur">One hundred Dollar</p>   
                </div>

                <div class="amount-list">
                    <p class="amount">${penny}</p>
                    <p class="amount">${nickel}</p>
                    <p class="amount">${dime}</p>
                    <p class="amount">${quater}</p>
                    <p class="amount">${one}</p>
                    <p class="amount">${five}</p>
                    <p class="amount">${ten}</p>
                    <p class="amount">${twenty}</p>
                    <p class="amount">${hundred}</p>
                </div>
            </div>
        </div>
    </div>
        `
    )
}


