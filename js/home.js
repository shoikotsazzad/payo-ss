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
         const pinInput = document.getElementById('input-pin-number').value;
         console.log(pinInput);

})