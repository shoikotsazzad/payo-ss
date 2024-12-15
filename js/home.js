//add money to the account


// step-1: add event handler to the add money button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click',function(event){
         //prevent page reload 
         event.preventDefault();
    
         //step-2: get money to be added to the account
         const addMoneyInput = document.getElementById('input-add-money').value;
         console.log(addMoneyInput);


         //get the pin number provided
         const pinNumberInput = document.getElementById('input-pin-number').value;
         console.log(pinNumberInput); 

         //verify the pin number
         if(pinNumberInput == '1234'){
            
            //step-4: get the current balance
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);

            //step-5: add addMoneyInput with balance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const addBalanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + addBalanceNumber;
            console.log(newBalance);

            //step-6: update the balance in the UI/DOM
            document.getElementById('account-balance').innerText = newBalance;

         }else{
            alert('failed to adding money')
         }

})