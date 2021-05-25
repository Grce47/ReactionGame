var difficulty = 5000;
var prev;
var cur;
var time;
reset();

document.getElementById("box").onclick = function(){
    cur = Date.now();
    time = cur - prev;
    time /= 1000;
    // console.log(time);
    document.getElementById("result").innerHTML = time;
    this.style.display = "none";
    reset();
} 
function randomPos() {
    var x = Math.random();
    x = Math.floor(x*1000);
    var xs = x+"px";
    var y = Math.random();
    y = Math.floor(y*500);
    var ys = y+"px";
    document.getElementById("box").style.left = xs;
    document.getElementById("box").style.top = ys;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randHeight_width()
{
    var x = Math.random();
    x*=201;
    x = Math.floor(x) + 20;
    var y = Math.random();
    y*=201;
    y = Math.floor(y) + 20;
    var xs = x+"px";
    var ys = y+"px";
    document.getElementById("box").style.height = xs;
    document.getElementById("box").style.width = ys;
}
function randomShape(){
    if(Math.random() > 0.5)
    {
        document.getElementById("box").style.borderRadius = "100%";
    }
    else
    {
        document.getElementById("box").style.borderRadius = "0%";
    }
}
function validate(){
    if(document.difficul.theBox.checked)
    {
        difficulty = 0;
    }
    else
    {
        difficulty = 5000;
    }
}
function reset(){
    var randomTime = Math.random();
    randomTime = randomTime * difficulty;
    
    setTimeout(function(){
        document.getElementById("box").style.backgroundColor = getRandomColor();
        randHeight_width();
        randomShape();
        randomPos();
        document.getElementById("box").style.display="block";
        prev = Date.now();
    }, randomTime)
}