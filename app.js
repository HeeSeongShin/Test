const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function handleButtonEvent(event){
    event.preventDefault();
    const name = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(name);
    greeting.innerText = `Hello ${name}`;
    greeting.classList.remove("hidden");4
}

loginForm.addEventListener("submit", handleButtonEvent);