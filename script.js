// let boxs = document.querySelectorAll(".box");
// let reset = document.querySelector(".reset");
// let newGame = document.querySelector(".newg");
// let win = document.querySelector("#win");
// let game = document.querySelector(".game");


// let turnO = true;

// let winPatterns = [
//   [0, 1, 2], // top row
//   [3, 4, 5], // middle row
//   [6, 7, 8], // bottom row

//   [0, 3, 6], // left column
//   [1, 4, 7], // middle column
//   [2, 5, 8], // right column

//   [0, 4, 8], // diagonal
//   [2, 4, 6], // diagonal
// ];

// boxs.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO) {
//       box.textContent = "O";
//       turnO = false;
//     } else {
//       box.textContent = "X";
//       turnO = true;
//     }
//     box.disabled = true;
//     checkWinner();
//   });
// });

//  let showWinner  = (winner) =>{
//     win.textContent = `Congratulations! you ${winner} win`;
//     game.style.display = "none";
//     win.style.display = "flex"
//   }
 

// const checkWinner = () => {
//   for (let pattern of winPatterns) {
//     let pos1Val = boxs[pattern[0]].textContent;
//     let pos2Val = boxs[pattern[1]].textContent;
//     let pos3Val = boxs[pattern[2]].textContent;

//       if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//     if (pos1Val === pos2Val && pos2Val === pos3Val) {
//       console.log(
//         "winner",pos1Val
//       );
//       showWinner(pos1Val);
//       return; // ⭐ winner mil gaya, loop stop
//     }
//   }
//   }
   
// };


let boxs = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newg");
let win = document.querySelector("#win");
let game = document.querySelector(".game");

let turnO = true;
let gameOver = false;

let winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameOver || box.textContent !== "") return;

    if (turnO) {
      box.textContent = "O";
      turnO = false;
    } else {
      box.textContent = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let showWinner = (winner) => {
  gameOver = true;
  win.textContent = `Congratulations! you ${winner} win`;
  game.style.display = "none";
  win.style.display = "flex";
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxs[pattern[0]].textContent;
    let pos2Val = boxs[pattern[1]].textContent;
    let pos3Val = boxs[pattern[2]].textContent;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return;
      }
    }
  }
};

function resetBoard() {
  gameOver = false;
  turnO = true;
  boxs.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
  });
  win.style.display = "none";
  game.style.display = "grid";
}

reset.addEventListener("click", resetBoard);
newGame.addEventListener("click", resetBoard);