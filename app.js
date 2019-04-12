var userScore = 0;
const userScore_span = document.getElementById("user-score");
const score_div = document.querySelector(".scores");
const result_1 = document.getElementsByClassName(".result > l");
const face_div = document.getElementById("f");
const pile_div = document.getElementById("p");

function Add_9() {
    userScore = userScore + 9;
}

function Add_1() {
    userScore = userScore + 1;
}

function getComputerChoice() {
    const choices = ["f", "p"];
    const randomNumber = Math.floor(Math.random() * 2);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "f") return "Face";
    if (letter === "p") return "Pile";
    else return "";
}




function win(userChoice, computerChoice) {
    userScore = userScore + 1;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(2).sup();
    const smallCompWord = "comp".fontsize(2).sup();
    document.getElementById(userChoice).classList.add("green-glow");


    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("green-glow")
    }, 500);
}


function lose(userChoice, computerChoice) {
    userScore = userScore - 1;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(2).sup();
    const smallCompWord = "comp".fontsize(2).sup();
    document.getElementById(userChoice).classList.add("red-glow");


    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("red-glow")
    }, 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {

        case "pp":
        case "ff":

            win(userChoice, computerChoice);
            break;
        case "pf":
        case "fp":

            lose(userChoice, computerChoice);
            break;
    }
}



function main() {
    face_div.addEventListener("click", function () {
        game("f");

    })



    pile_div.addEventListener("click", function () {
        game("p");
    })

}

main()