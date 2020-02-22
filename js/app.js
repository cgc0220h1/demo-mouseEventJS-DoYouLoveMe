alert("There's only one thing");
alert("two do");
alert("there words");
alert("four you ...");

function moveRandom() {
    let horizontal = Math.floor(Math.random() * window.innerWidth);
    let vertical = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("buttonNo").style.left = horizontal + 'px';
    document.getElementById("buttonNo").style.top = vertical + 'px';
}

function reset() {
    document.getElementById("buttonNo").style.top = "480px";
    document.getElementById("buttonNo").style.left = "1000px";
}