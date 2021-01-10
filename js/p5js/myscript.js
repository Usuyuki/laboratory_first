let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  let canvas = createCanvas(720, 400);
  canvas.parent("canvas");
  stroke(255);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;
  pg = createGraphics(200, 200);
}

function draw() {
  background(230);

  // Draw the clock background
  noStroke();
  fill(0, 0, 0);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(126, 77, 65);
  ellipse(cx, cy, clockDiameter, clockDiameter);
  //コップの柄の部分
  fill(0, 0, 0);
  rect(530, height / 2 - 40, 40, 80);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
}

// width heightがデフォルト変数として使える

// 乱数 random()←引数によって意味変わる
// random() 0-1
// random(n) 0-n
// random(n,m) n-m　までの乱数
// var x,y,z;
// function setup(){
//     //最初に一回だけ
//     createCanvas(480,240);
//     background('skyblue');

// }

// function draw(){
//     //繰り返し実行される
//     noStroke();
//     background('skyblue');
//     ellipse(mouseX, mouseY, r, r);//マウスの状態はmouseX,Yを使う！
//     if(keyIsPressed ==true){//mouseISPressd押されるとtrueに
//         fill('pink');
//     }else{
//         fill('white');
//     }
// }

// 普通きーkey
// function keyTyped(){
//  if(key==='u'){
//      r +=10;
//  }
//  return false;
// }
// 特殊キーkeyCode　↑で大きくなる
// function keyTyped(){
//     if(keyCode===UP_ARROW){
//         r +=10;
//     }
//     return false;
// }

// 色 グレースケール 0-225
//RGB
//HSB

//
// colorMode(HSB,100);
// rect(x,40,50,50);
// ellipse(width/2,height/2,100,100)
// line(100,100,width/2,height/2);
// // rect(x,y,w,h)
// x++;

//色を変数で使う
// var c =color('pink');
// fill(c);
// stroke(c);
// strokeWeight(5);
// // nofill()
// ellipse(width/2,height/2,200,100);

// 文字を扱う
// Text(s,x,y,w,h)
// textAlign(LEFT,TOP);//水平方向、上下方向
// textSize(32);
// textFont('Impact')
// textStyle(BOLD)
// fill('pink')
// strokeWeight(5);
// stroke('gray');
// text("helo world",100,100);

//図形動かす
// noStroke();

// fill(255,0,0,127);//色
// rect(0,0,100,100);

// push();//設定保存
// translate(10, 10);//(移動)
// rotate(PI/4);//回転(ラジアン指定)
// rotate(radians(30));//回転(角度)
// scale(2,0.5);//たて、よこ　に倍率変更
// fill(0,0,255,127);//色(青)
// rect(0,0,100,100);
// pop();

// // マウス操作関連
// var r =50;
// function setup(){
//     //最初に一回だけ
//     createCanvas(480,240);
//     background('skyblue');

// }

// function draw(){
//     //繰り返し実行される
//     noStroke();
//     background('skyblue');
//     ellipse(mouseX, mouseY, r, r);//マウスの状態はmouseX,Yを使う！
//     if(mouseIsPressed ==true){//mouseISPressd押されるとtrueに
//         fill('pink');
//     }else{
//         fill('white');
//     }
// }

// function mousePressed(){
//     r +=10;
//     return false;//デフォルトの動作無効化←ブラウザによる誤作動防止
// }

// // キー入力 keyIsPressed
// // keyTyped()　特殊キー無視した特定キー
// // keyPressed()　大文字小文字区別しない
// // key
// // keyCode 特殊キー altなど
// var r =50;
// function setup(){
//     //最初に一回だけ
//     createCanvas(480,240);
//     background('skyblue');

// }

// function draw(){
//     //繰り返し実行される
//     noStroke();
//     background('skyblue');
//     ellipse(mouseX, mouseY, r, r);//マウスの状態はmouseX,Yを使う！
//     if(keyIsPressed ==true){//mouseISPressd押されるとtrueに
//         fill('pink');
//     }else{
//         fill('white');
//     }
// }

// // 普通きーkey
// // function keyTyped(){
// //  if(key==='u'){
// //      r +=10;
// //  }
// //  return false;
// // }
// // 特殊キーkeyCode　↑で大きくなる
// // function keyTyped(){
// //     if(keyCode===UP_ARROW){
// //         r +=10;
// //     }
// //     return false;
// // }
