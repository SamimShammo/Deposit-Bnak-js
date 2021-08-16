// 1st deposit-button
document.getElementById('deposit-button').addEventListener('click', function(){
    // 2nd ger input value  
    const depositInput = document.getElementById('deposit-balance');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText);
   
    // 3rd adjust input in Amount 
    const depositAmountIncome = document.getElementById('deposit-amount');
    const depositIncomeText = depositAmountIncome.innerText;
    const PreviusAmount = parseFloat(depositIncomeText);
    
    depositAmountIncome.innerText = PreviusAmount + newDepositAmount;
    
    // depositAmountIncome.innerText = totalAmount;
    // 5th addjust balance total 
    const mybalaceAmount = document.getElementById('balance');
    const balaceAmountText = mybalaceAmount.innerText;
    const balaceAmount = parseFloat(balaceAmountText);

    mybalaceAmount.innerText = balaceAmount + newDepositAmount
    
    // total balnce amount addjust 
    // const totalBalaceAmount =  balaceAmount+newDepositAmount;
    // mybalaceAmount.innerText = totalBalaceAmount;
    

    depositInput.value = '';
})

document.getElementById('withdrawn-button').addEventListener('click', function(){
    const withdraw = document.getElementById('deposit-withdraw');
    const whitdrawText = withdraw.value;
    const depositWhitdraw = parseFloat(whitdrawText);
     
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawText = withdrawAmount.innerText;
    const newWithdrawAmount = parseFloat(withdrawText);

    const totalWithdraw = newWithdrawAmount + depositWhitdraw;
    withdrawAmount.innerText = totalWithdraw;
     
    // upadte balance 

    const balance = document.getElementById('balance');
    const myBalance = balance.innerText;
    const previusBalance =parseFloat(myBalance);

    // total withdrawAmount and total balance
    const totalWithdrawBalance = previusBalance - depositWhitdraw;
    balance.innerText = totalWithdrawBalance;
withdraw.value= '';
})