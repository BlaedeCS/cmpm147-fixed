// project.js - purpose and description here
// Author: Your Name
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }
  
  // define a method
  myMethod() {
    // code to run when method is called
  }
}

function main() {
  // create an instance of the class
  let seed = 239;

const baseColor = "#a90c2a"; // For personal reference, it's converted to RGB in the actual drawing
const baseShift = " #a90c5f";
const seamColor = "#6b2059";
const diamondColor = "#36a15d";
const triangleColor = "#1a7c3d";
const diamondStripe = "#5fd58a";
const grassColor = "#6b2059";
const skyColor = "#1a7c3d";
const stoneColor = "#858290";
const treeColor = "#33330b";

function setup() {
  createCanvas(1280, 720);
  createButton("reimagine").mousePressed(() => seed++);
}

function draw() {
  randomSeed(seed);
  

  
  background(255);

  noStroke();
  let keyColor = color(169-30*noise(0.0001*millis()+17),12,42);
  fill(keyColor);
  
  push();
  
  let g = beginShape();
  
  let x1 = 100*noise(0.0003*millis())-50+width/4;
  let x2 = 100*noise(10+0.0003*millis())-50+3*width/4;
  let x3 = 100*noise(14+0.0003*millis())-50+3*width/4;
  let x4 = 100*noise(3+0.0003*millis())-50+width/4;
  
  let y1 = 60*noise(5+0.0003*millis())-30+height/4;
  let y2 = 60*noise(2+0.0003*millis())-30+height/4;
  let y3 = 60*noise(6+0.0003*millis())-30+3*height/4;
  let y4 = 60*noise(8+0.0003*millis())-30+3*height/4;
  
  let lasty2 = 0;
  let lastx2 = 0;
  let lastx3 = 0;
  let lasty4 = 0;
  
  //vertex(x1,y1);
  let xrate = map(width/160,0,2*width/4,0,x2-x1);
  
  for (let i = x1; i <= x2 + 1; i+=xrate) {
    let x = i;
    let y = map(i,x1,x2,y1,y2)+30*noise(20-0.001*millis()+x/height)-15;
    vertex(x, y);
    lastx2 = x;
    lasty2 = y;
  }
  
  let yrate = map(height/160,0,2*height/4,0,y3-y2);

  for (let i = lasty2 + yrate; i <= y3 + 1; i+=yrate) {
    let offset = i/(lasty2 + yrate);
    
    let x = map(i,lasty2,y3,x2,x3)+50*(offset-1)*noise(22-0.001*millis()+i/height)-25*(offset-1);
    let y = i;
    vertex(x, y);
    lastx3 = x;
    
  }
  
  let xrate2 = map(width/160,0,2*width/4,0,lastx3-x4);
  
  for (let i = lastx3 - xrate2; i >= x4 - 1; i-=xrate2) {
    let x = i;
    
    let corey = map(i,lastx3,x4,y3,y4)-30*noise(27-0.001*millis()+x/height)+15;
    let y = map(i,lastx3 - xrate2,x4-1,y3,corey);
    vertex(x, y);
    lastx2 = x;
    lasty4 = y;
  }
  
  let yrate2 = map(height/160,0,2*height/4,0,y4-y1);
  let yhang = 1;
  
  for (let i = lasty4 - yrate2; i >= y1 ; i-=yrate2) {
    let offset = i/(y1-1);
    let secretoffset = map(i,lasty4 - yrate2,y1,100,0);
    let corex = map(i,lasty4,y1,x4,x1)-60*(1/yhang)*(offset-1)*noise(25-0.001*millis()+i/height)+30*(offset-1)*(1/yhang);
    let xbalance = x4;
    let x = map(secretoffset,100,0,x4,corex);
    let y = i;
    vertex(x, y);
  }
  
  
  
  endShape(CLOSE);
  
  canvas.getContext("2d").clip();
  
  stroke(0,255);
  strokeWeight(4);
  noFill();
  
  for (let m = 0; m < 100; m += 25) {
    let j = beginShape();
  
    for (let i = 0; i < 100; i++) {

      let x = 2 + millis()/1.5 % 1000;
      let y = 3*40*((m/13+millis()*0.004)%39);
      vertex(width/6 + y*sin(((i+m)%100)/30-1)*sin(noise(0.01*((i+m)%100)+millis()*0.001)),height/6 + y*cos(((i+m)%100)/30-1)*sin(1+1.7*noise(50.1+millis()*0.001)));
    }

    endShape();
  }
  
  
  for (let m = 0; m < 100; m += 25) {
    let j = beginShape();
  
    for (let i = 0; i < 100; i++) {

      let x = 2 + millis()/1.5 % 1000;
      let y = 3*40*(((100+m)/13+millis()*0.004)%39);
      vertex(width/6 + y*sin(((i+m)%100)/30-1)*sin(noise(0.01*((i+m)%100)+millis()*0.001)),height/6 + y*cos(((i+m)%100)/30-1)*sin(1+1.7*noise(50.1+millis()*0.001)));
    }

    endShape();
  }
  
  for (let m = 0; m < 100; m += 25) {
    let j = beginShape();
  
    for (let i = 0; i < 100; i++) {

      let x = 2 + millis()/1.5 % 1000;
      let y = 3*40*(((200+m)/13+millis()*0.004)%39);
      vertex(width/6 + y*sin(((i+m)%100)/30-1)*sin(noise(0.01*((i+m)%100)+millis()*0.001)),height/6 + y*cos(((i+m)%100)/30-1)*sin(1+1.7*noise(50.1+millis()*0.001)));
    }

    endShape();
  }
  
  for (let m = 0; m < 100; m += 25) {
    let j = beginShape();
  
    for (let i = 0; i < 100; i++) {

      let x = 2 + millis()/1.5 % 1000;
      let y = 3*40*(((300+m)/13+millis()*0.004)%39);
      vertex(width/6 + y*sin(((i+m)%100)/30-1)*sin(noise(0.01*((i+m)%100)+millis()*0.001)),height/6 + y*cos(((i+m)%100)/30-1)*sin(1+1.7*noise(50.1+millis()*0.001)));
    }

    endShape();
  }
  
  for (let m = 0; m < 100; m += 25) {
    let j = beginShape();
  
    for (let i = 0; i < 100; i++) {

      let x = 2 + millis()/1.5 % 1000;
      let y = 3*40*(((400+m)/13+millis()*0.004)%39);
      vertex(width/6 + y*sin(((i+m)%100)/30-1)*sin(noise(0.01*((i+m)%100)+millis()*0.001)),height/6 + y*cos(((i+m)%100)/30-1)*sin(1+1.7*noise(50.1+millis()*0.001)));
    }

    endShape();
  }
  
  fill(diamondColor);
  
  for (let m = 0; m < 6; m += 1) {
    fill(diamondColor);
    let diamondAmount = 0.2*m+0.002*millis() % 20;
    let diamondJump = 4+3*noise(m+30+millis()*0.001)%2 + 100*(m+0.001*millis() % 5);
    let diamond = beginShape();
    let spotx = width*noise(140*m+0.00001*millis());
    let spoty = 0-height*noise(5+150*m+0.00001*millis());
    let epicSize = 1.5 + (0.01*(m*100 + 0.0*millis()) % (5));
    vertex(spotx - 15*epicSize,spoty+(0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx,spoty - 25*epicSize+(0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx + 15*epicSize,spoty+(0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx,spoty + 25*epicSize+(0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    endShape(CLOSE);
    
    push();
    canvas.getContext("2d").clip();
    fill(triangleColor);
    stroke(diamondStripe);
    for (let w = 0; w < 100; w += 25) {
      let r = beginShape();

      for (let i = 0; i < 100; i++) {

        let x = 2 + millis()/1.5 % 1000;
        let y = 3*40*(((400+w)/13+millis()*0.004)%39);
        vertex(width/6 + y*sin(((i+w)%100)/30-1)*sin(noise(0.01*((i+w)%100)+millis()*0.001)),height/6 + y*cos(((i+w)%100)/30-1)*sin(1+1.7*noise(50.1+millis()*0.001)));
      }

      endShape();
    }
    
    noFill();
    stroke(diamondStripe);
    for (let w = 100; w < 500; w += 25) {
      let r = beginShape();

      for (let i = 0; i < 100; i++) {

        let x = 2 + millis()/1.5 % 1000;
        let y = 3*40*(((400+w)/13+millis()*0.004)%39);
        vertex(width/6 + y*sin(((i+w)%100)/30-1)*sin(noise(0.01*((i+w)%100)+millis()*0.001)),height/6 + y*cos(((i+w)%100)/30-1)*sin(1+1.7*noise(50.1+millis()*0.001)));
      }

      endShape();
    }
    pop();
  }
  
  for (let m = 0; m < 6; m += 1) {
    fill(diamondColor);
    let diamondAmount = 0.2*m+0.002*millis() % 20;
    let diamondJump = 4+3*noise(m+30+millis()*0.001)%2 + 100*(m+0.001*millis() % 5);
    let diamond = beginShape();
    let spotx = width*noise(160*m+0.00001*millis());
    let spoty = 0-height*noise(5+170*m+0.00001*millis());
    let epicSize = 1 + (0.01*(m*100 + 0.0*millis()) % (4));
    vertex(spotx - 15*epicSize,spoty+(height+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx,spoty - 25*epicSize+(height+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx + 15*epicSize,spoty+(height+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx,spoty + 25*epicSize+(height+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    endShape(CLOSE);
    
    push();
    canvas.getContext("2d").clip();
    fill(triangleColor);
    stroke(diamondStripe);
    
    
    noFill();
    stroke(diamondStripe);
    for (let w = 0; w < 500; w += 25) {
      let r = beginShape();

      for (let i = 0; i < 100; i++) {

        let x = 2 + millis()/1.5 % 1000;
        let y = 3*40*(((400+w)/13+millis()*0.004)%39);
        vertex(width/6 + y*sin(((i+w)%100)/30-1)*sin(noise(0.01*((i+w)%100)+millis()*0.001)),height/6 + y*cos(((i+w)%100)/30-1)*sin(1+1.7*noise(50.1+millis()*0.001)));
      }

      endShape();
    }
    pop();
  }
  
  for (let m = 0; m < 6; m += 1) {
    fill(diamondColor);
    let diamondAmount = 0.2*m+0.002*millis() % 20;
    let diamondJump = 4+3*noise(m+30+millis()*0.001)%2 + 100*(m+0.001*millis() % 5);
    let diamond = beginShape();
    let spotx = width*noise(180*m+0.00001*millis());
    let spoty = 0-height*noise(5+190*m+0.00001*millis());
    let epicSize = 3 + (0.01*(m*100 + 0.0*millis()) % (4));
    vertex(spotx - 15*epicSize,spoty+(height/2+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx,spoty - 25*epicSize+(height/2+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx + 15*epicSize,spoty+(height/2+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx,spoty + 25*epicSize+(height/2+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    endShape(CLOSE);
    
    push();
    canvas.getContext("2d").clip();
    fill(triangleColor);
    stroke(diamondStripe);
    
    
    noFill();
    stroke(diamondStripe);
    for (let w = 0; w < 500; w += 25) {
      let r = beginShape();

      for (let i = 0; i < 100; i++) {

        let x = 2 + millis()/1.5 % 1000;
        let y = 3*40*(((400+w)/13+millis()*0.004)%39);
        vertex(width/6 + y*sin(((i+w)%100)/30-1)*sin(noise(0.01*((i+w)%100)+millis()*0.001)),height/6 + y*cos(((i+w)%100)/30-1)*sin(1+1.7*noise(50.1+millis()*0.001)));
      }

      endShape();
    }
    pop();
  }
  
  for (let m = 0; m < 6; m += 1) {
    fill(diamondColor);
    let diamondAmount = 0.2*m+0.002*millis() % 20;
    let diamondJump = 4+3*noise(m+30+millis()*0.001)%2 + 100*(m+0.001*millis() % 5);
    let diamond = beginShape();
    let spotx = width*noise(210*m+0.00001*millis());
    let spoty = 0-height*noise(5+220*m+0.00001*millis());
    let epicSize = 3 + (0.01*(m*100 + 0.0*millis()) % (5));
    vertex(spotx - 15*epicSize,spoty+(3*height/2+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx,spoty - 25*epicSize+(3*height/2+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx + 15*epicSize,spoty+(3*height/2+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    vertex(spotx,spoty + 25*epicSize+(3*height/2+0.5*millis())%(2*height)+300*noise(5+167*m+0.0005*millis()));
    endShape(CLOSE);
    
    push();
    canvas.getContext("2d").clip();
    fill(triangleColor);
    stroke(diamondStripe);
    
    
    noFill();
    stroke(diamondStripe);
    for (let w = 0; w < 500; w += 25) {
      let r = beginShape();

      for (let i = 0; i < 100; i++) {

        let x = 2 + millis()/1.5 % 1000;
        let y = 3*40*(((400+w)/13+millis()*0.004)%39);
        vertex(width/6 + y*sin(((i+w)%100)/30-1)*sin(noise(0.01*((i+w)%100)+millis()*0.001)),height/6 + y*cos(((i+w)%100)/30-1)*sin(1+1.7*noise(50.1+millis()*0.001)));
      }

      endShape();
    }
    pop();
  }
  
  
  
  
  
  pop();
  

 
}

}

// let's get this party started - uncomment me
main();