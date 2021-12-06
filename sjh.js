const button = document.querySelector("#button");
const img = document.querySelector("#img");

function onButton(event){
    event.preventDefault();
    button.classList.add("hidden");
    img.classList.remove("hidden");
}

button.addEventListener("click", onButton);