let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enablAllBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "red"
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "blue"
            turnO = true;
        }
        box.disabled = true;

        checkWinnner();
    });
});

const disablAllBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enablAllBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratuletions. Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablAllBoxes();
};

const checkWinnner = () => {
    for (let pattern of winPatterns) {
        let box1val = boxes[pattern[0]].innerText;
        let box2val = boxes[pattern[1]].innerText;
        let box3val = boxes[pattern[2]].innerText;

        if (box1val != "" && box2val != "" && box3val != "") {
            if (box1val == box2val && box2val == box3val) {

                showWinner(box1val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);


resetbtn.addEventListener("click", resetGame);