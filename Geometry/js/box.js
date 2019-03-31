let gMouseDownX = 0;
let gMouseDownY = 0;
let gMouseDownOffsetX = 0;
let gMouseDownOffsetY = 0;

let startX1 = 0;
let start1 = 0;
let startDiv1 = 0;

let startX2 = 0;
let start2 = 0;
let startDiv2 = 0;

let startX3 = 0;
let start3 = 0;
let startDiv3 = 0;

let startX4 = 0;
let start4 = 0;
let startDiv4 = 0;

let startX5 = 0;
let start5 = 0;
let startDiv5 = 0;

let leftPart = "";
let leftPos = leftPart.indexOf("px");
let leftNumString = leftPart.slice(0, leftPos);
let topPart = "";
let topPos = topPart.indexOf("px");
let topNumString = topPart.slice(0, topPos);    

let topAmountCheck = 0;
let leftAmountCheck = 0;

let front = "";
let beside = "";
let above = "";

function addListeners() {
    document.getElementById('ans1').addEventListener('mousedown', mouseDown1, false);
    document.getElementById('ans2').addEventListener('mousedown', mouseDown2, false);
    document.getElementById('ans3').addEventListener('mousedown', mouseDown3, false);
    document.getElementById('ans4').addEventListener('mousedown', mouseDown4, false);
    document.getElementById('ans5').addEventListener('mousedown', mouseDown5, false);
    document.getElementById('ans1').addEventListener('mouseup', mouseUp1, false);
    document.getElementById('ans2').addEventListener('mouseup', mouseUp2, false);
    document.getElementById('ans3').addEventListener('mouseup', mouseUp3, false);
    document.getElementById('ans4').addEventListener('mouseup', mouseUp4, false);
    document.getElementById('ans5').addEventListener('mouseup', mouseUp5, false);
}

function mouseUp1() {
    document.getElementById('ans1').removeEventListener('mousemove', divMove1, true);
    if(startDiv1 != 0){
        startX1=0;
        start1=1;
    }
    if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 420 
        && leftAmountCheck > 210 && front == ""){
        document.getElementById("Front").src = document.getElementById("ans1").src ;
        document.getElementById('ans1').addEventListener('mousedown', mouseDown1, true);
        front = document.getElementById("Front").src;
        document.getElementById('ans1').src = "";console.log(front);
    }else if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 760 && leftAmountCheck > 570
        && beside == ""){
        document.getElementById("Beside").src = document.getElementById("ans1").src ;
        document.getElementById('ans1').addEventListener('mousedown', mouseDown1, true);
        beside = document.getElementById("Beside").src;
        document.getElementById('ans1').src = "";
    }else if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 1110 && leftAmountCheck > 920
        &&  above == ""){
        document.getElementById("Above").src = document.getElementById("ans1").src ;
        document.getElementById('ans1').addEventListener('mousedown', mouseDown1, true);
        above = document.getElementById("Above").src;
        document.getElementById('ans1').src = "";
    }
}
function mouseUp2() {
    document.getElementById('ans2').removeEventListener('mousemove', divMove2, true);
    if(startDiv2 != 0){
        startX2=0;
        start2=1;
    }
    if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 420 && leftAmountCheck > 210 
        && front == ""){
        document.getElementById("Front").src = document.getElementById("ans2").src ;
        document.getElementById('ans2').addEventListener('mousedown', mouseDown1, true);
        front = document.getElementById("Front").src;
        document.getElementById('ans2').src = "";console.log(front);
    }else if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 760 && leftAmountCheck > 570
        && beside == ""){
        document.getElementById("Beside").src = document.getElementById("ans2").src ;
        document.getElementById('ans2').addEventListener('mousedown', mouseDown1, true);
        beside = document.getElementById("Beside").src;
        document.getElementById('ans2').src = "";
    }else if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 1110 && leftAmountCheck > 920
        &&  above == ""){
        document.getElementById("Above").src = document.getElementById("ans2").src ;
        document.getElementById('ans2').addEventListener('mousedown', mouseDown1, true);
        above = document.getElementById("Above").src;
        document.getElementById('ans2').src = "";
    }
}
function mouseUp3() {
    document.getElementById('ans3').removeEventListener('mousemove', divMove3, true);
    if(startDiv3 != 0){
        startX3=0;
        start3=1;
    }
    if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 420 && leftAmountCheck > 210
        && front == ""){
        document.getElementById("Front").src = document.getElementById("ans3").src ;
        document.getElementById('ans3').addEventListener('mousedown', mouseDown1, true);
        front = document.getElementById("Front").src;
        document.getElementById('ans3').src = "";console.log(front);
    }else if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 760 && leftAmountCheck > 570
        && beside == ""){
        document.getElementById("Beside").src = document.getElementById("ans3").src ;
        document.getElementById('ans3').addEventListener('mousedown', mouseDown1, true);
        beside = document.getElementById("Beside").src;
        document.getElementById('ans3').src = "";
    }else if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 1110 && leftAmountCheck > 920
        &&  above == ""){
        document.getElementById("Above").src = document.getElementById("ans3").src ;
        document.getElementById('ans3').addEventListener('mousedown', mouseDown1, true);
        above = document.getElementById("Above").src;
        document.getElementById('ans3').src = "";
    }
}
function mouseUp4() {
    document.getElementById('ans4').removeEventListener('mousemove', divMove4, true);
    if(startDiv4 != 0){
        startX4=0;
        start4=1;
    }
    if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 420 && leftAmountCheck > 210
        && front == ""){
        document.getElementById("Front").src = document.getElementById("ans4").src ;
        document.getElementById('ans4').addEventListener('mousedown', mouseDown1, true);
        front = document.getElementById("Front").src;
        document.getElementById('ans4').src = "";console.log(front);
    }else if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 760 && leftAmountCheck > 570
        && beside == ""){
        document.getElementById("Beside").src = document.getElementById("ans4").src ;
        document.getElementById('ans4').addEventListener('mousedown', mouseDown1, true);
        beside = document.getElementById("Beside").src;
        document.getElementById('ans4').src = "";
    }else if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 1110 && leftAmountCheck > 920
        &&  above == ""){
        document.getElementById("Above").src = document.getElementById("ans4").src ;
        document.getElementById('ans4').addEventListener('mousedown', mouseDown1, true);
        above = document.getElementById("Above").src;
        document.getElementById('ans4').src = "";
    }
}function mouseUp5() {
    document.getElementById('ans5').removeEventListener('mousemove', divMove5, true);
    if(startDiv5 != 0){
        startX5=0;
        start5=1;
    }
    if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 420 && leftAmountCheck > 210
        && front == ""){
        document.getElementById("Front").src = document.getElementById("ans5").src ;
        document.getElementById('ans5').addEventListener('mousedown', mouseDown1, true);
        front = document.getElementById("Front").src;
        document.getElementById('ans5').src = "";console.log(front);
    }else if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 760 && leftAmountCheck > 570
        && beside == ""){
        document.getElementById("Beside").src = document.getElementById("ans5").src ;
        document.getElementById('ans5').addEventListener('mousedown', mouseDown1, true);
        beside = document.getElementById("Beside").src;
        document.getElementById('ans5').src = "";
    }else if(topAmountCheck < -60 && topAmountCheck > -255 && leftAmountCheck < 1110 && leftAmountCheck > 920
        &&  above == ""){
        document.getElementById("Above").src = document.getElementById("ans5").src ;
        document.getElementById('ans5').addEventListener('mousedown', mouseDown1, true);
        above = document.getElementById("Above").src;
        document.getElementById('ans5').src = "";
    }
}

function mouseDown1(e) {
    gMouseDownX = e.clientX;
    gMouseDownY = e.clientY;
    if(start1 == 0){
        startX1 = gMouseDownX+20;
    }

    var div = document.getElementById('ans1');

     leftPart = "";
    if(!div.style.left){
        leftPart+="0px";
    }   
    else{
        leftPart = div.style.left;
    }
     leftPos = leftPart.indexOf("px");
     leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
    gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString,10);

    //The following block gets the Y offset (the difference between where it starts and where it was clicked)
     topPart = "";
    if(!div.style.top){
        topPart+="0px";
    }
    else{
        topPart = div.style.top;
    }
     topPos = topPart.indexOf("px");
     topNumString = topPart.slice(0, topPos);    // Get the Y value of the object.
    gMouseDownOffsetY = gMouseDownY - parseInt(topNumString,10);
    document.getElementById('ans1').addEventListener('mousemove', divMove1, true);
}

function mouseDown2(e) {
    gMouseDownX = e.clientX;
    gMouseDownY = e.clientY;
    if(start2 == 0){
        startX2 = gMouseDownX+20;
    }

    var div = document.getElementById('ans2');

    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    leftPart = "";
    if(!div.style.left){
        leftPart+="0px";
    }   
    else{
        leftPart = div.style.left;
    }
    leftPos = leftPart.indexOf("px");
    leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
    gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString,10);

    //The following block gets the Y offset (the difference between where it starts and where it was clicked)
     topPart = "";
    if(!div.style.top){
        topPart+="0px";
    }
    else{
        topPart = div.style.top;
    }
     topPos = topPart.indexOf("px");
     topNumString = topPart.slice(0, topPos);    // Get the Y value of the object.
    gMouseDownOffsetY = gMouseDownY - parseInt(topNumString,10);
    document.getElementById('ans2').addEventListener('mousemove', divMove2, true);
}


function mouseDown3(e) {
    gMouseDownX = e.clientX;
    gMouseDownY = e.clientY;
    if(start3 == 0){
        startX3 = gMouseDownX+20;
    }

    var div = document.getElementById('ans3');

     leftPart = "";
    if(!div.style.left){
        leftPart+="0px";
    }   
    else{
        leftPart = div.style.left;
    }
     leftPos = leftPart.indexOf("px");
     leftNumString = leftPart.slice(0, leftPos);
    gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString,10);

     topPart = "";
    if(!div.style.top){
        topPart+="0px";
    }
    else{
        topPart = div.style.top;
    }
     topPos = topPart.indexOf("px");
     topNumString = topPart.slice(0, topPos);    
    gMouseDownOffsetY = gMouseDownY - parseInt(topNumString,10);
    document.getElementById('ans3').addEventListener('mousemove', divMove3, true);
}

function mouseDown4(e) {
    gMouseDownX = e.clientX;
    gMouseDownY = e.clientY;
    if(start4 == 0){
        startX4 = gMouseDownX+20;
    }

    var div = document.getElementById('ans4');

     leftPart = "";
    if(!div.style.left){
        leftPart+="0px";
    }   
    else{
        leftPart = div.style.left;
    }
     leftPos = leftPart.indexOf("px");
     leftNumString = leftPart.slice(0, leftPos);
    gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString,10);

     topPart = "";
    if(!div.style.top){
        topPart+="0px";
    }
    else{
        topPart = div.style.top;
    }
     topPos = topPart.indexOf("px");
     topNumString = topPart.slice(0, topPos);    
    gMouseDownOffsetY = gMouseDownY - parseInt(topNumString,10);
    document.getElementById('ans4').addEventListener('mousemove', divMove4, true);
}

function mouseDown5(e) {
    gMouseDownX = e.clientX;
    gMouseDownY = e.clientY;
    if(start5 == 0){
        startX5 = gMouseDownX+20;
    }

    var div = document.getElementById('ans5');

     leftPart = "";
    if(!div.style.left){
        leftPart+="0px";
    }   
    else{
        leftPart = div.style.left;
    }
     leftPos = leftPart.indexOf("px");
     leftNumString = leftPart.slice(0, leftPos);
    gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString,10);

     topPart = "";
    if(!div.style.top){
        topPart+="0px";
    }
    else{
        topPart = div.style.top;
    }
     topPos = topPart.indexOf("px");
     topNumString = topPart.slice(0, topPos);    
    gMouseDownOffsetY = gMouseDownY - parseInt(topNumString,10);
    document.getElementById('ans5').addEventListener('mousemove', divMove5, true);
}

function divMove1(e){
    var div = document.getElementById('ans1');
    div.style.position = 'absolute';
    var topAmount = e.clientY - gMouseDownOffsetY ;
    //console.log(e.clientY);
    //console.log(gMouseDownOffsetY);
    //console.log(topAmount);
    div.style.top = topAmount + 'px';
    var leftAmount = e.clientX - gMouseDownOffsetX + startX1;
    //console.log(e.clientX);
    //console.log(gMouseDownOffsetX);
    //console.log(leftAmount);
    div.style.left = leftAmount + 'px';
    startDiv1=1;
    topAmountCheck = topAmount;
    leftAmountCheck = leftAmount;
}


function divMove2(e){
    var div = document.getElementById('ans2');
    div.style.position = 'absolute';
    var topAmount = e.clientY - gMouseDownOffsetY ;
    div.style.top = topAmount + 'px';
    var leftAmount = e.clientX - gMouseDownOffsetX + startX2;
    div.style.left = leftAmount + 'px';
    startDiv2=1;
    topAmountCheck = topAmount;
    leftAmountCheck = leftAmount;
}

function divMove3(e){
    var div = document.getElementById('ans3');
    div.style.position = 'absolute';
    var topAmount = e.clientY - gMouseDownOffsetY ;
    div.style.top = topAmount + 'px';
    var leftAmount = e.clientX - gMouseDownOffsetX + startX3;
    div.style.left = leftAmount + 'px';
    startDiv3=1;
    topAmountCheck = topAmount;
    leftAmountCheck = leftAmount;
}

function divMove4(e){
    var div = document.getElementById('ans4');
    div.style.position = 'absolute';
    var topAmount = e.clientY - gMouseDownOffsetY ;
    div.style.top = topAmount + 'px';
    var leftAmount = e.clientX - gMouseDownOffsetX + startX4;
    div.style.left = leftAmount + 'px';
    startDiv4=1;
    topAmountCheck = topAmount;
    leftAmountCheck = leftAmount;
}

function divMove5(e){
    var div = document.getElementById('ans5');
    div.style.position = 'absolute';
    var topAmount = e.clientY - gMouseDownOffsetY ;
    div.style.top = topAmount + 'px';
    var leftAmount = e.clientX - gMouseDownOffsetX + startX5;
    div.style.left = leftAmount + 'px';
    startDiv5=1;
    topAmountCheck = topAmount;
    leftAmountCheck = leftAmount;
}


addListeners();