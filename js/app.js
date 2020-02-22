alert("There's only one thing");
alert("two do");
alert("there words");
alert("four you ...");
let clickTime = 0;

function moveRandom() {
    let horizontal = Math.floor(Math.random() * window.innerWidth);
    let vertical = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("buttonNo").style.left = horizontal + 'px';
    document.getElementById("buttonNo").style.top = vertical + 'px';
    clickTime = clickTime + 1;
    if (clickTime < 10) {
        document.getElementById("clickResult").innerHTML = "<b>Số lần click trượt: </b>" + clickTime;
    } else {
        alert("Đừng từ chối mình. Mình đáng yêu mà...");
        document.getElementById("clickResult").innerHTML = "<b>Số lần từ chối: </b>" + clickTime;
    }

}

function reset() {
    document.getElementById("buttonNo").style.top = "480px";
    document.getElementById("buttonNo").style.left = "1000px";
}