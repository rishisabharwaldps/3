leftWristX=0;
rightWrist=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    
    canvas=createCanvas(550,450);
    canvas.position(600,125);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized!!!');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWrist-rightWrist);
    }
}

function draw(){
    background('#6C91C2');
    textSize(difference);
    fill('#FFE787');
    text('Rishi', 50, 400);
}               