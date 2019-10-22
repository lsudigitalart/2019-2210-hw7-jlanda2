var answer;
let cB=0;
function preload(){
    answer = loadSound("Answer.mp3");
}
function setup(){
    userStartAudio();
    createCanvas(1500,700);
    background(0);
    answer.jump(130,30);
    //answer.play();
    //answer.jump(32,29)
    amp=new p5.Amplitude();
    fft=new p5.FFT();
}
function draw(){
    background(50,0,30);
    let spectrum = fft.analyze();
    for (var i = 0; i< spectrum.length; i+=1.5){
      let x = map(i, 0, spectrum.length-200, 0, width);
      let h = map(spectrum[i], 0, 255, 0,350);
      push();
      stroke(random(231,211),random(243,223),random(169,149));
      strokeWeight(30);
      h = map(spectrum[i], 0, 255, 0,180);
      scale(random(1,1.5));
      rect(x, h,.1,.1);
      pop();
      push();
      stroke(random(192,172),random(205,185),random(115,95));
      strokeWeight(35);
      h = map(spectrum[i], 0, 255, 0,280);
      scale(random(1,1.5));
      rect(x, h,.1,.1);
      pop();
//3rd darkest
      push();
      stroke(random(192,172),random(155,135),random(113,93));
      strokeWeight(40);
      h = map(spectrum[i], 0, 255, 0,420);
      scale(random(1,1.5));
      rect(x, h,.1,.1);
      pop();
//4th darkest
      push();
      stroke(random(194,174),random(94,74),random(128,108));
      strokeWeight(45);
      h = map(spectrum[i], 0, 255, 0,560);
      scale(random(1,1.5));
      rect(x, h,.1,.1);
      pop();
//dark purple
      push();
      stroke(random(158,138),random(27,7),random(113,93));
      strokeWeight(45);
      h = map(spectrum[i], 0, 255, 0,700);
      scale(random(1,1.5));
      rect(x, h,.1,.1);
      pop();
    }
    //print(level);
    // print (spectrum);
}
// stroke(random(194,174),random(94,74),random(128,108));