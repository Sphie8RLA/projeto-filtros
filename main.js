noseX = 0;
noseY = 0;

function setup()
{
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);


}
function draw()
{
image(video , 0, 0, 300, 280);
image(nariz, noseX, noseY, 30, 30);
}

function preload()
{
nariz = loadImage("https://i.postimg.cc/Wb3PgV0t/m.png");
}

function tirarFoto(){
    save("Foto.png");
}
function modelLoaded(){
    console.log("O modelo PoseNet foi carregado...");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    console.log("Nariz x = " + results[0].pose.nose.x);
    console.log("Nariz y = " + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x - 15;
    noseY = results[0].pose.nose.y - 15;

}
}
