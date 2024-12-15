
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    
    const cashOut = document.getElementById('input-cash-out').value;
    

    const pinNumber = document.getElementById('cash-out-pin').value;
    

    if(pinNumber == '1234'){
        const balance =document.getElementById('account-balance').innerText;
        
        
        const balanceNumber = parseFloat(balance);
        const cashOutNumber = parseFloat(cashOut);

        //Final Balance
        const newBalance = balanceNumber - cashOutNumber;

        //update the UI
        document.getElementById('account-balance').innerText = newBalance;
        
    }else{
        alert('Wrong Pin Number. Please try again later.')
    }

})
