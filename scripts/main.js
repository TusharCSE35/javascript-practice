
// For heading cahange
/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hellow World!";

document.querySelector("html").addEventListener("click", function(){
    alert("ouch! Stop poking me!");
})
*/

// For image change
const myImage = document.querySelector("img");
myImage.addEventListener("click", ()=>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc==="image/firefox.webp"){
        myImage.setAttribute("src","image/firefox2.png");
    }
    else{
        myImage.setAttribute("src","image/firefox.webp");
    }
});



// For button change
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    
    if (myName) {  
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (localStorage.getItem("name")) {
    myHeading.textContent = `Mozilla is cool, ${localStorage.getItem("name")}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});


// For others button
const button = document.querySelector(".b1");
button.addEventListener("click", ()=>{
    const name = prompt("Enetr your name");
    button.textContent = `Player 1: ${name}`;
});
