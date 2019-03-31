var arrSum = [{ q: "1/2 + 2/2", a1: "3/2", a2: "4/2", a3: "2/2", a4: "1/2", answer: "a1" },
{ q: "3/4 + 2/8", a1: "5/4", a2: "8/8", a3: "5/8", a4: "5/12", answer: "a2" },
{ q: "52/20 + 2/10", a1: "54/30", a2: "54/20", a3: "56/20", a4: "54/25", answer: "a3" },
{ q: "8/12 + 12/12", a1: "5/3", a2: "5/12", a3: "20/24", a4: "54/20", answer: "a1" },
{ q: "60/80 + 60/20", a1: "60/100", a2: "30/8", a3: "20/100", a4: "120/100", answer: "a2" },
{ q: "15/30 + 20/25", a1: "60/100", a2: "30/8", a3: "20/30", a4: "39/30", answer: "a4" }]

var arrMinus = [{ q: "3/2 - 2/2", a1: "1/2", a2: "4/2", a3: "2/2", a4: "3/2", answer: "a1" },
{ q: "3/4 - 2/8", a1: "5/4", a2: "4/8", a3: "5/8", a4: "5/12", answer: "a2" },
{ q: "52/20 - 2/10", a1: "54/30", a2: "54/20", a3: "48/20", a4: "52/20", answer: "a3" },
{ q: "12/12 - 8/12", a1: "1/3", a2: "5/12", a3: "20/24", a4: "2/3", answer: "a1" },
{ q: "6/20 - 11/40", a1: "5/40", a2: "1/40", a3: "17/40", a4: "5/20", answer: "a2" },
{ q: "11/3 - 20/30", a1: "1/3", a2: "31/30", a3: "2/3", a4: "3/1", answer: "a4" }]

var arrMultiply = [{ q: "3/2 x 2/2", a1: "3/2", a2: "6/2", a3: "5/4", a4: "1/2", answer: "a1" },
{ q: "3/4 x 2/8", a1: "5/32", a2: "6/32", a3: "6/12", a4: "5/12", answer: "a2" },
{ q: "52/20 x 2/10", a1: "100/200", a2: "104/20", a3: "104/200", a4: "208/20", answer: "a3" },
{ q: "12/12 x 8/12", a1: "2/3", a2: "3/2", a3: "96/12", a4: "20/144", answer: "a1" },
{ q: "10/20 x 11/40", a1: "11/800", a2: "11/80", a3: "21/800", a4: "110/80", answer: "a2" },
{ q: "11/3 x 20/30", a1: "20/30", a2: "22/90", a3: "220/9", a4: "22/9", answer: "a4" }]

var arrDivide = [{ q: "3/2 ÷ 2/2", a1: "3/2", a2: "6/2", a3: "5/4", a4: "1/2", answer: "a1" },
{ q: "3/4 ÷ 2/8", a1: "23/8", a2: "24/8", a3: "6/32", a4: "1/2", answer: "a2" },
{ q: "30/20 ÷ 2/10", a1: "6/20", a2: "60/200", a3: "30/4", a4: "32/30", answer: "a3" },
{ q: "12/14 ÷ 8/12", a1: "144/112", a2: "20/168", a3: "96/168", a4: "20/112", answer: "a1" },
{ q: "10/20 ÷ 11/40", a1: "400/22", a2: "40/22", a3: "110/80", a4: "21/80", answer: "a2" },
{ q: "11/3 ÷ 20/30", a1: "31/30", a2: "220/90", a3: "22/6", a4: "33/6", answer: "a4" }]

var level = 1
var arrRandom = [];
var n = -1;
var score = 0;
var next = 0;
var heart = 3;
var nextQuestion = "sum";

function endQuestion() {
    document.getElementById("scoreEndGame").innerHTML = "คุณได้คะแนน : " + score
}
function winQuestion() {
    document.getElementById("scoreWinGame").innerHTML = "ยินดีด้วยคุณได้คะแนน : " + score
}
function EndGame(value) {
    if (value === "open") {
        document.getElementById('endGame').classList.remove('deplay-none');
    } else {
        document.getElementById('endGame').classList.add('deplay-none');
    }
}
function WinGame(value) {
    if (value === "open") {
        document.getElementById('winGame').classList.remove('deplay-none');
    } else {
        document.getElementById('winGame').classList.add('deplay-none');
    }
}

window.onload = function start() {
    randomQuestion();
    sum();
    startTime()

}

function randomQuestion() {
    arrRandom = [];
    do {
        var random = Math.floor(Math.random() * 6);
        if (arrRandom.length == 0) {
            arrRandom.push(random);
        } else {
            var check = true;
            for (i = 0; i < arrRandom.length; i++) {
                if (arrRandom[i] == random) {
                    check = false;
                }
            }
            if (check == true) {
                arrRandom.push(random);
            }
        }
    }
    while (arrRandom.length < 3);
}

function mainGame(value) {
    if (value === "open") {
        document.getElementById('mainGame').classList.remove('deplay-none');
    } else {
        document.getElementById('mainGame').classList.add('deplay-none');
    }
}
function playMathGame() {
    window.location.href = './MathGame.html';
}
function goMainGame() {
    window.location.href = './selectGame.html';
}
function endGame() {
    endQuestion()
    EndGame("open")
    mainGame("close")
}

function winGame() {
    winQuestion()
    WinGame("open")
    mainGame("close")
}

function selectAns(value) {
    console.log(nextQuestion,next)
    var checkAnsSum = arrSum[x].answer;
    if (nextQuestion == "sum") {
        if (checkAnsSum == value) {
            score = score + 10
            document.getElementById("GameScore").innerHTML = score
        } else {
            heart--
            document.getElementById("GameHeart").innerHTML = heart
            if (heart == 0) {
                /*endGame()*/
            }
        }
        if (next < 3){
            sum()
        }else {
            nextQuestion = "minus"
            next = 0
            n = -1
            randomQuestion()
            minus()
            document.getElementById("levelGame").innerHTML = "Lv.2"
        }
    }

    else if (nextQuestion == "minus") {
        var checkAnsMinus = arrMinus[x].answer;
        if (checkAnsMinus == value) {
            score = score + 20
            document.getElementById("GameScore").innerHTML = score
        } else {
            heart--
            document.getElementById("GameHeart").innerHTML = heart
            if (heart == -1) {
                endGame()  
            }
        }
        if (next < 3){
            minus()
        }else {
            nextQuestion = "multiply"
            next = 0
            n = -1
            randomQuestion()
            multiply()
            document.getElementById("levelGame").innerHTML = "Lv.3"
        }
    }

    else if (nextQuestion == "multiply") {
        var checkAnsMultiply = arrMultiply[x].answer;
        if (checkAnsMultiply == value) {
            score = score + 30
            document.getElementById("GameScore").innerHTML = score
        } else {
            heart--
            document.getElementById("GameHeart").innerHTML = heart
            if (heart == -1) {
                endGame()
            }
        }
        if (next < 3){
            multiply()
        }else {
            nextQuestion = "divide"
            next = 0
            n = -1
            document.getElementById("levelGame").innerHTML = "Lv.4"
            randomQuestion()
            divide()
        }

    }
    
    else if (nextQuestion == "divide") {
        var checkAnsDivide = arrDivide[x].answer;
        if (checkAnsDivide  == value) {
            score = score + 40
            document.getElementById("GameScore").innerHTML = score
        } else {
            heart--
            document.getElementById("GameHeart").innerHTML = heart
            if (heart == -1) {
                endGame()
            }
        }
        if (next < 3){
            divide()
        }else {
            winGame()
        }
    }
}

function sum() {
    next++;
    n = n + 1
    x = parseInt(arrRandom[n])
    document.getElementById('proposition').innerHTML = arrSum[x].q+" = ?";
    document.getElementById("a1").innerHTML = arrSum[x].a1;
    document.getElementById("a2").innerHTML = arrSum[x].a2;
    document.getElementById("a3").innerHTML = arrSum[x].a3;
    document.getElementById("a4").innerHTML = arrSum[x].a4;

}

function minus() {
    next++
    n = n + 1
    x = parseInt(arrRandom[n])
    document.getElementById('proposition').innerHTML = arrMinus[x].q +" = ?";
    document.getElementById("a1").innerHTML = arrMinus[x].a1;
    document.getElementById("a2").innerHTML = arrMinus[x].a2;
    document.getElementById("a3").innerHTML = arrMinus[x].a3;
    document.getElementById("a4").innerHTML = arrMinus[x].a4;

}

function multiply() {
    next++
    n = n + 1
    x = parseInt(arrRandom[n])
    document.getElementById('proposition').innerHTML = arrMultiply[x].q +" = ?";
    document.getElementById("a1").innerHTML = arrMultiply[x].a1;
    document.getElementById("a2").innerHTML = arrMultiply[x].a2;
    document.getElementById("a3").innerHTML = arrMultiply[x].a3;
    document.getElementById("a4").innerHTML = arrMultiply[x].a4;
}

function divide() {
    next++
    n = n + 1
    x = parseInt(arrRandom[n])
    document.getElementById('proposition').innerHTML = arrDivide[x].q+" =? ";
    document.getElementById("a1").innerHTML = arrDivide[x].a1;
    document.getElementById("a2").innerHTML = arrDivide[x].a2;
    document.getElementById("a3").innerHTML = arrDivide[x].a3;
    document.getElementById("a4").innerHTML = arrDivide[x].a4;
}

function startTime() {

    var timeOut = 0;
    var timer = 60 * 5, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("timeGame").innerHTML = minutes + ":" + seconds;
        if (timer === timeOut) {
            endGame()
        }
        if (--timer < 0) {
            timer = 60 * 5;
        }
    }, 1000);
}



