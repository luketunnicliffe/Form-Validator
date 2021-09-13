const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}


//Check email is valid.
function isValidEmail(email){

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

//Check required fields
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        console.log(input);
    }
    
    );

}

//Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault(); //Prevents the form from submitting
   
   checkRequired([username, email, password, password2]);
   
});
