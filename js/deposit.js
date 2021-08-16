document.getElementById('deposit-button').addEventListener('click', function(){
    // get amount  1st
    const depositBalance = document.getElementById('deposit-balance');
    const depositInput = depositBalance.value;
    // convert Number 
    const newDepositAmount = parseFloat(depositInput);
    // 2nd get  previus Amount 
    const currentAmount = document.getElementById('deposit-amount');
    const previusAmountText = currentAmount.innerText;
    // convert 
    const previusAmount = parseFloat(previusAmountText);
    
    // 3rd new amount + previus Amount 
    const totoalAmount = previusAmount+newDepositAmount ;

    currentAmount.innerText = totoalAmount;
    

    // update  balance
    const availableBalance= document.getElementById('balance');
    const balanceText = availableBalance.innerText;
    const myBalance = parseFloat(balanceText);

    // total my balace 
    const totalBalace =  myBalance+newDepositAmount;
    availableBalance.innerText = totalBalace;


  
    // clear input 
    depositBalance.value = '';
    
})

document.getElementById('withdrawn-button').addEventListener('click', function(){
// get withdraw amount
    const withdraw = document.getElementById('deposit-withdraw');
    const depositWhitdrawText = withdraw.value;
    const depositWhitdraw = parseFloat(depositWhitdrawText);

    // total withdraw amount 
    const withdrawAmount = document.getElementById('withdraw-amount');
    const previusWhitdraw  = withdrawAmount.innerText;
    const previusWhitdrawAmount= parseFloat(previusWhitdraw);

    // total withdrawAmount 
    const totalWithdraw = previusWhitdrawAmount + depositWhitdraw ;
    withdrawAmount.innerText = totalWithdraw;
   

    // main withdraw totoalAmount 
    const mainBalace = document.getElementById('balance');
    const myMianBalance = mainBalace.innerText;
    const myTotalBalance = parseFloat(myMianBalance);
    
    const totalMyBalance = myTotalBalance - depositWhitdraw;
    mainBalace.innerText = totalMyBalance;

 withdraw.value = '';
})

