// variables 

const message = document.querySelector(".message");
const text = document.getElementById("text");
const send = document.getElementById("send");
const clear = document.getElementById("clear");

send.addEventListener("click", deliverMessage); 

function deliverMessage () {
    let textValue = text.value;
    message.innerHTML = textValue;
}  

clear.addEventListener("click", clearField);

function clearField () {
    message.innerHTML = "You cleared the history";
    text.value = "";
}
