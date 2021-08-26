
var noseX = 0;
var noseY = 0;

function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();
    canvas.position(470,300)
    video = createCapture(VIDEO);
    video.size(500 , 400);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 400);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown_nose,noseX,noseY,30,30);


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}

function modelLoaded()
{
    console.log("PoseNet is initialized")
}

function take_snapshot()
{
    save('Image.png');
}