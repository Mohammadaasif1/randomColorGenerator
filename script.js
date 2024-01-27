const colorContainerParent = document.getElementById("color-container");
const h1 = document.getElementById("main-heading");
h1.style.backgroundColor = randomColor();

for(let i =0; i<300; i++){
    let colorContainerDiv = document.createElement("div");
    colorContainerDiv.classList.add("colorContainer");
    colorContainerDiv.style.backgroundColor = randomColor();
    colorContainerDiv.innerText = randomColor();
    colorContainerParent.appendChild(colorContainerDiv);
}

function randomColor(){
    const str = "0123456789abcdef";
    colorStr = "#";
    for(let i=0; i<6; i++){
        let randomNum = Math.floor(Math.random() * str.length);
        colorStr += str[randomNum];
    }
    return colorStr;
}
randomColor();
