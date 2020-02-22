alert("There's only one thing");
alert("two say");
alert("there words");
alert("four you ...");
let clickTimes = 0;

function moveRandom() {
    let horizontal = Math.floor(Math.random() * window.innerWidth);
    let vertical = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("buttonNo").style.left = horizontal + 'px';
    document.getElementById("buttonNo").style.top = vertical + 'px';
    ++clickTimes;
    if (clickTimes < 10) {
        document.getElementById("clickResult").innerHTML = "<b>Số lần click trượt: </b>" + clickTimes;
    } else {
        alert("Đừng từ chối mình. Mình đáng yêu mà...");
        document.getElementById("clickResult").innerHTML = "<b>Số lần từ chối: </b>" + clickTimes;
    }

}

function reset() {
    document.getElementById("buttonNo").style.top = "480px";
    document.getElementById("buttonNo").style.left = "1000px";
    clickTimes = 0;
    document.getElementById("clickResult").innerHTML = ""
}