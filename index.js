console.log("Welcome to Tic Tac Toe")
let audioTurn = new Audio("ting.mp3")
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0,10,10],
        [3, 4, 5, 5, 15, 0,10,30],
        [6, 7, 8, 5, 25, 0,10,50],
        [0, 3, 6, -5, 15, 90, -10, 30],
        [1, 4, 7, 5, 15, 90, 10, 30],
        [2, 5, 8, 15, 15, 90,30,30],
        [0, 4, 8, 5, 15, 45,11,31],
        [2, 4, 6, 5, 15, 135,9,31],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            console.log(e[0]);
            console.log(e[1]);
            console.log(e[2]);

            var x = window.matchMedia("(max-width: 950px)");
            function myFunction(x) {
                if (x.matches) { // If media query matches
                    document.querySelector(".line").style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[5]}deg)`
                    document.querySelector(".line").style.width = "40vw";
                } else {
                    document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                    document.querySelector(".line").style.width = "20vw";
                }
            }
            myFunction(x) // Call listener function at run time
            x.addListener(myFunction) // Attach listener function on state changes      
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})

