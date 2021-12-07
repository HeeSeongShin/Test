const button = document.querySelector("#button");
const img = document.querySelector("#img");
const imgArr = ["https://ifh.cc/g/ND9vXA.jpg", "https://ifh.cc/g/8xeOQs.jpg", "https://ifh.cc/g/WGQPZl.jpg", "https://ifh.cc/g/wOikEc.jpg", "https://ifh.cc/g/otsCqh.jpg", "https://ifh.cc/g/Kzguug.jpg", "https://ifh.cc/g/d5neuK.jpg"];

function onButton(event){
    event.preventDefault();
    button.classList.add("hidden");
    img.classList.remove("hidden");
    onImg();
}
let i = 0;
function onImg(event){
    if(parseInt(i) < imgArr.length -1){
        i = parseInt(i) + 1;
    }else{
        i = 0;
    }
    img.src = imgArr[i];
}

button.addEventListener("click", onButton);

setInterval(onImg, 1000);