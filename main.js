noseY=0;
noseX=0;
difference=0;
rightWristX=0;
leftWristX=0;
function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function draw(){
background('#ffe6f0');
square(noseX,noseY,difference);
fill('#ff4d4d');
stroke('#ff4d4d');
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;

    console.log("Nose x= "+noseX);
    console.log("Nose y= "+noseY);

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;

    difference=floor(leftWristX-rightWristX);

    console.log("Left Wrist X = "+leftWristX);
    console.log("Right Wrist X = "+rightWristX);
    console.log(difference);

    document.getElementById("square").innerHTML="Side of the Square = "+difference;

}
}