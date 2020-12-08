
// width heightがデフォルト変数として使える


// 乱数 random()←引数によって意味変わる
// random() 0-1
// random(n) 0-n
// random(n,m) n-m　までの乱数
var x,y,z;
function setup(){
    //最初に一回だけ
    createCanvas(480,240);
    background('skyblue');
    

}

function draw(){
    //繰り返し実行される
    noStroke();
    background('skyblue');
    ellipse(mouseX, mouseY, r, r);//マウスの状態はmouseX,Yを使う！
    if(keyIsPressed ==true){//mouseISPressd押されるとtrueに
        fill('pink');
    }else{
        fill('white');
    }
}

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