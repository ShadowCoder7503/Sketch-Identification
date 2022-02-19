function setup(){
    canvas= createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}
function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
    
}
function ClearCanvas(){
    background("white");
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY) ;
    }
}
function classifyCanvas(){
     classifier.classify(canvas,gotResult);
}
function gotResult(error,results){
    if (error){
        console.error(error);
    }
   
        console.log(results);
        document.getElementById("label").innerHTML = "This is the sketch of a " + results[0].label;
        document.getElementById("confidence").innerHTML = "Confidence:" + Math.round(results[0].confidence * 100) + "%";
    }
