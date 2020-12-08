var x=0;
function setup(){
    //最初に一回だけ
    createCanvas(480,240);
}

function draw(){
    //繰り返し実行される
    background(0);
    rect(x,40,50,50)
    x++;
}