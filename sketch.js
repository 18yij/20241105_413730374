let angle = 0;
let r = 255, g = 0, b = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#DCB5FF");
}

function draw() {
  background("#DCB5FF");
  rectMode(CENTER);
  noFill();
  stroke("#FFBFFF");
  strokeWeight(3);

  let rect_width = 50 + mouseX / 10;
  let bc_width = 50 + mouseY / 10;
  let sc_width = 25 + mouseX / 10;

  //繪製形狀的網格
  for (let j = 0; j < 20; j ++) {
    for (let i = 0; i < 40; i ++) {

      if(j<5){
        stroke("#B9B9FF")
      }else if(j<10){
        stroke("#B15BFF")
      }else{stroke("#FF79BC")
    }
    ellipse(25+50*i,25+50*j,bc_width );
    rect(25+50*i,25+50*j,rect_width);
    ellipse(50+50*i,50+50*j,sc_width);
    }
  }

  //更新顏色漸變
  r = (r + 1) % 270;
  g = (g + 2) % 270;
  b = (b + 3) % 270;

  //字母顏色和旋轉
  fill(r,g,b);
  textSize(75);
  textAlign(CENTER,CENTER);
  translate(width / 2, height / 2);
  rotate(angle);
  text('ELLA',0,0);
  angle = angle + 100;
}
