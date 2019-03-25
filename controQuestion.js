
function plate_license_add() {
    window.location.href = './plate_license_add.html';
}

function startTimer() {
    var timeOut = 295;
    var timer = 60 * 5, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("timeGame").innerHTML = minutes + ":" + seconds;
        if(timer === timeOut){
            alert("spot")
        }
        if (--timer < 0) {
            timer = 60 * 5;
        }
    }, 1000);
}
startTimer()