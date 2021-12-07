function setInt(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    h2.innerText = `${hours}:${minutes}:${seconds}`;
}
setInt();
setInterval(setInt, 1000);