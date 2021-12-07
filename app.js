const loginForm = document.querySelector("#local-form");
const input = loginForm.querySelector("input");
const h1 = document.querySelector("#hello");
const h2 = document.querySelector("#clock");

if(localStorage.length == 0){
    loginForm.addEventListener("submit", onLogin);
}else{
    loginForm.classList.add("hidden");
    h1.innerText = `Hello ${localStorage.getItem("username")}`;
    onRemove();
}

function onLogin(event){
    event.preventDefault();
    const name = input.value;
    localStorage.setItem("username", name);
    loginForm.classList.add("hidden");
    h1.innerText = `Hello ${name}`;
    onRemove();
}

function onRemove(){
    h1.classList.remove("hidden");
    h2.classList.remove("hidden");
}