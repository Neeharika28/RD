nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,350);
    video.position(150,150)
    
    canvas = createCanvas(400,400);
    canvas.position(650,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#ffffff");
    fill("#5cb85c");
    stroke("#5cb85c");
    square(nosex,nosey,difference);
    document.getElementById("span").innerHTML = "The height and width of the square is " + difference + "px";
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
console.log("nosex = "+ nosex + "nosey = "+ nosey);
leftwristx = results[0].pose.leftWrist.x;
rightwristx = results[0].pose.rightWrist.x;
difference = floor(leftwristx - rightwristx);
console.log("leftwristx = " + leftwristx + "rightwristx = "+ rightwristx + "difference = " + difference);
}
}
