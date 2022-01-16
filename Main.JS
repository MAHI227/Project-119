function setup() {
canvas = createCanvas(280,280);
canvas.center();
background("black");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}
function prelod(){
    classifer=ml5.imageClassifier('DoodleNet');
    }
    function draw(){
        strokeWeight(13);
        stroke("white");

        if(mouseIsPressed){
            line(pmouseY,pmouseX,pmouseY,pmouseX);
        }
    }
  function classifyCanvas(){
      classifier.classify(canvas,gotResult);
}  

function gotResult(error,results){
    if(error){
        console.error(error);
   }
        console.log(results);
            document.getElementById('label').innerHTML = 'Label :' + results[0].label;
            document.getElementById('confidence').innerHTML='confidence' + Math.round(results [0].confidence *100) +'%'
                utterThis = new SpeechSynthesisUtterance(resutls[0].label);
                synth.speak(utterThis);
   }



