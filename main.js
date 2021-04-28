

function setup(){
    canvas= createCanvas(480,380);
    canvas.center();
}

function start(){
    objectDetector= ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById('status').innerHTML= " Status : Detecting Objects "
}

function modelLoaded(){
    console.log('modelLoaded');
}