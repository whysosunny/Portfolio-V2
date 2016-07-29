var numOfColors = 6;
var colors = generateRandomColors(numOfColors);
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
var hgroup = document.querySelector(".hgroup");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

function reset(num) {
    hgroup.style.background = "#1e90c7";
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
}

function changeColors(color) {
    for(var i=0; i<squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomNum(max) {
    return (Math.floor(Math.random() * (max+1)));
}

function generateRandomColors(num) {
    var outputArr =[];
    for(var i=0; i<num; i++) {
        outputArr.push("rgb(" +randomNum(255) +", " +randomNum(255) +", " +randomNum(255) +")");
    }
    return outputArr;
}

easyBtn.addEventListener("click", function() {
    reset(3);
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    for(var i=0; i<squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    reset(6);
    for(var i=0; i<squares.length; i++) {
        squares[i].style.background = colors[i];
        if(i> 2) {
            squares[i].style.display = "block";
        }
    }
});

resetButton.addEventListener("click", function() {
    reset(numOfColors);
    for(var i=0; i<squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    messageDisplay.textContent = "";
    if(this.textContent === "Play Again?") {
        this.textContent = "New Colors";
    }
});

function init() {
    for(var i=0; i<squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                hgroup.style.background = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

init();