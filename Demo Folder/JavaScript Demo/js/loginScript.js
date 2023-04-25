const form = document.getElementById('signup');

const NAME_REQUIRED = "PLEASE ENTER YOUR NAME";
const EMAIL_REQUIRED = "PLEASE ENTER EMAIL";
const EMAIL_INVALID = "EMAIL IS INVALID";
const SELECTION_REQUIRED = "PLEASE SELECT AN OPTION"

function hasValue(input){
    if(input.value.trim()===""){
        return showError(input, NAME_REQUIRED);
    }

    return showSuccess(input);
}

function hasChoice(){
    if( (document.getElementById('subscribe').checked) || (document.getElementById('unsubscribe').checked) ){
        return showSuccess(subscribe);
    }

    return showError(subscribe, SELECTION_REQUIRED);
}

function validEmail(input){
    const email = input.value.trim();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email===""){
        return showError(input, EMAIL_REQUIRED);
    }
    else if (!emailRegex.test(email)){
        return showError(input, EMAIL_INVALID);
    }

    return showSuccess(input);
}

function showSuccess(element){
    return showMessage(element, "", true);
}

function showError(element, msg){
    return showMessage(element, msg, false);
}

function showMessage(el, message, response){
    const smallMSG = el.parentNode.querySelector("small");
    smallMSG.textContent = message;

    el.className = response ? "success" : "error";

    return response;
}

form.addEventListener("submit", function (event){
    event.preventDefault();

    let nameValid = hasValue(form.elements["name"]);
    let emailValid = validEmail(form.elements["email"]);
    let selectValid = hasChoice();

    if(nameValid && emailValid && selectValid){
        alert("Demon only. No POST - All fields valid");
    }
})