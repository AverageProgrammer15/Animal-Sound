function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/y5Rf_pb0M/model.json', modelReady);
}
function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      img = document.getElementById('alien1') 
      img1 = document.getElementById('alien2')
      img2 = document.getElementById('alien3')
      img3 = document.getElementById('alien4')
  if (results[0].label == "Background Noise") {
        img.src = 'alien.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (results[0].label == "Lion") {
        img.src = 'aliens-01.png';
        img1.src = 'https://media.tenor.com/JMdrJoyMv5UAAAAM/aslan-roar.gif';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (results[0].label == "Cat") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'https://media.tenor.com/nisaHYy8yAYAAAAM/besito-catlove.gif';
        img3.src = 'aliens-04.png';
      }else{
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutYGEQIf9M9qFaPqQuLL3lXk6uOh6nT2cyQ&s';
      }
    }
  }