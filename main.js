sound = ""
var rightwrist_x
var rightwrist_y
var leftwrist_x
var leftwrist_y
function preload(){
    sound = loadSound("music.mp3")
}

function setup(){
    canvas = createCanvas(600,500)
    canvas.center();

    video = createCapture(VIDEO)
    video.hide()

    pose_net = ml5.poseNet(video,modelLoaded)

    pose_net.on('pose',getPoses)

}
function draw(){
    image(video,0,0,600,500)
}
function play(){
    sound.play()
    sound.setVolume(0.5)
    sound.rate(1)
}
function modelLoaded(){
    console.log("pose net is initialized");
}
function getPoses(results){
    if (results.length > 0){
        console.log(results);
        rightwrist_x = results[0].pose.rightWrist.x
        rightwrist_y = results[0].pose.rightWrist.y
        leftwrist_x = results[0].pose.leftWrist.x
        leftwrist_y = results[0].pose.leftWrist.y
        console.log("RightWrist x="+rightwrist_x+"RightWrist y="+rightwrist_y)
        console.log("leftWrist x="+leftwrist_x+"leftWrist y="+leftwrist_y)
    }
}
