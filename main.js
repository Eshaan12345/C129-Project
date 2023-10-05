song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() 
{
    song = loadSound("music.mp3");
}






function setup() 
{
  canvas = createCanvas(600,500);
  canvas.center();
  
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded); //Adding Posenet model for Video to get left and right hand wrist values
  poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log('Posenet has been initialized!');
}

function draw() 
{
    image(video,0,0,600,500);
}

function play() 
{
    song.play();
    song.setVolume(1); //Full Volume
    song.rate(1); //Normal Speed
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}