
document.getElementById('button-login')
.addEventListener('click', function(event){
    event.preventDefault(); //form submit reloading the page
    console.log('button clicked');

    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);

    // get pin number
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

    // validate phone number and pin
    if(phoneNumber === '5' && pinNumber ==='1234'){
        console.log('you are logged in');
        window.location.href ='home/home.html';
    }else{
        alert('wrong phone number or pin')
    }

})


