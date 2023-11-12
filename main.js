Webcam.set({
 width:350,
 height:350,
 image_format:'png',
 png_quality:90
});
camera= document.getElementById("camera")
Webcam.attach("#camera");

function takepic(){
   Webcam.snap(function (tooken_img){
      document.getElementById("result").innerHTML='<img id="captured_image" width="350" height="260" src="'+tooken_img+'"/>';
   })
}

console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sCcYsmHKo/model.json', modelLoaded)

function modelLoaded(){
   console.log("model Loaded successfully");
}

function ident_pic(){
   Tooken_img=document.getElementById("captured_image");
   classifier.classify(Tooken_img, display_result);
}


function display_result(error, results){
  if(error){
   console.error(error);
  }
  else{
   console.log(results)
   document.getElementById("person").innerHTML=results[0].label;
   document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);

  }
}