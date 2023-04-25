
"use strict"


// 1 vending machine

let total = 0;
const vendingButton = document.querySelector(".vending-machine");
const paragraph = document.querySelector(".para");

vendingButton.addEventListener("click", (elem) => {
    if(elem.target.classList.contains("lime")) {
        total += 2
    } else if (elem.target.classList.contains("peanut")) {
        total += 3  
    } else if (elem.target.classList.contains("chocolate")) {
        total += 4
    } else if (elem.target.classList.contains("gummies")) {
        total += 6
    }
    console.dir(paragraph);
    paragraph.innerText = "total: " + total + ".00";
});

// 2 make money

const makeMoneyButton = document.querySelector(".money-button");
const whichCoin = document.querySelector(".coin");
const addBoxHere = document.querySelector(".add-box")
const howMany = document.querySelector("#how-many")

makeMoneyButton.addEventListener("click", () => {
    console.dir(howMany);
    if (whichCoin.selectedIndex === 0) {
        console.log("penny");
        for (let i = 0; i < howMany.value; i++) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "penny");
            addBoxHere.append(newDiv);
        }
    } else if (whichCoin.selectedIndex === 1) {
        console.log("nickle");
        for (let i = 0; i < howMany.value; i++) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "penny");
            addBoxHere.append(newDiv);
        }
    } else if (whichCoin.selectedIndex === 2) {
        console.log("dime");
        for (let i = 0; i < howMany.value; i++) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "penny");
            newDiv.classList.add("penny");
        }
    } else if (whichCoin.selectedIndex === 3) {
        console.log("quarter");
        for (let i = 0; i < howMany.value; i++) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "penny");
            addBoxHere.append(newDiv);
        }
    }
    
});

console.log(howMany);


//3 light bulb

const lightBulb = document.querySelector(".light-bulb");
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");

const onButtonFunc = () => {
    onButton.addEventListener("click", () => {
        lightBulb.classList.add("yellow-mode");
    })
}

onButtonFunc();

const offButtonFunc = () => {
    offButton.addEventListener("click", (e) => {
        lightBulb.classList.remove("yellow-mode")
    })
}

offButtonFunc();

const toggleButtonFunc = () => {
    toggleButton.addEventListener ("click", (e) => {
        lightBulb.classList.toggle("yellow-mode");
   })
    
}

toggleButtonFunc();

const endButtonFunc = () => {
    endButton.addEventListener ('click', (e) => {
        onButton.disabled = true;
        offButton.disabled = true;
        toggleButton.disabled= true;
        endButton.disabled = true;
    })
}

endButtonFunc();