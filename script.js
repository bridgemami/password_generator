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

function generatePassword(element1, element2) {
  //if hit the generate button the text disappears and hides the button
  element1.textContent = "";
  element2.classList.add("hide");
  for (let i = 0; i < 15; i++) {
    let random = Math.floor(Math.random() * characters.length);
    let character = characters[random];
    element1.textContent += character;
  }
  element1.style = "cursor: text;";
}

//let user know they have copied the password
function copyPw(element) {
  element.classList.remove("hide");
  element.classList.add("passwordBtn");
}


// event listener to generate the passwords
generateBtn.addEventListener("click", () => {
  generatePassword(psOneEl, copyOneEl), generatePassword(psTwoEl, copyTwoEl);
});

//event listener for copying

psOneEl.addEventListener("copy", () => {
  copyPw(copyOneEl);
});

psTwoEl.addEventListener("copy", () => {
  copyPw(copyTwoEl);
});
