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
let copy = document.getElementById("copy");
let numbers = document.getElementById("numbers");
let noNumbers = document.getElementById("noNumbers");
//15 characters long and 2 random pws
//random number

function generatePassword(element1) {
  //if hit the generate button the text disappears and hides the button
  let pwLength = numbers.value;
    element1.textContent = "";
    copy.classList.add("hide");
    for (let i = 0; i < pwLength; i++) {
      let random = Math.floor(Math.random() * characters.length);
      let character = characters[random];
      element1.textContent += character;
    }
    element1.classList.remove("hide");
    element1.classList.add("passwordBtn");
    element1.style = "cursor: text;";
  }

//let user know they have copied the password
function copyPw(element) {
  copy.classList.remove("hide");
  copy.classList.add("flexRow");
  element.classList.remove("hide");
  element.classList.add("passwordBtn");
}

// event listener to generate the passwords
generateBtn.addEventListener("click", () => {
  generatePassword(psOneEl), generatePassword(psTwoEl);
});

//event listener for copying

psOneEl.addEventListener("copy", () => {
  copyPw(copyOneEl);
});

psTwoEl.addEventListener("copy", () => {
  copyPw(copyTwoEl);
});
