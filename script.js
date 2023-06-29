const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let generateBtn = document.getElementById("generateBtn");
let psOneEl = document.getElementById("passwordOne");
let psTwoEl = document.getElementById("passwordTwo");
let copyOneEl = document.getElementById("copyOne");
let copyTwoEl = document.getElementById("copyTwo");
let copy = document.createElement("copy");
//15 characters long and 2 random pws
//random number
let random;
let character;

function generatePasswordOne() {
    //if hit the generate button the text disappears and hides the button
  psOneEl.textContent= "";
  copyOneEl.classList.add("hide");
  for (let i = 0; i < 15; i++) {
    let random = Math.floor(Math.random() * characters.length);
    let character = characters[random];
    psOneEl.textContent += character;
  }
  psOneEl.style = "cursor: text;";
}

function generatePasswordTwo() {
      //if hit the generate button the text disappears and hides the button
  psTwoEl.textContent= "";
  copyTwoEl.classList.add("hide");
  for (let i = 0; i < 15; i++) {
    let random = Math.floor(Math.random() * characters.length);
    let character = characters[random];
    psTwoEl.textContent += character;
  }
  psTwoEl.style = "cursor: text;";
}
//let user know they have copied the password
function copyOne() {
  copyOneEl.classList.remove("hide");
  copyOneEl.classList.add("passwordBtn");
  
}

function copyTwo() {
  copyTwoEl.classList.remove("hide");
  copyTwoEl.classList.add("passwordBtn");
  
}

// event listener to generate the passwords
generateBtn.addEventListener("click", () => {
  generatePasswordOne(), generatePasswordTwo();
});

//event listener for copying

psOneEl.addEventListener("copy", () => {
  copyOne();
});

psTwoEl.addEventListener("copy", () => {
  copyTwo();
});
