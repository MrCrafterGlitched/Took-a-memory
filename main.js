var speech= window.webkitSpeechRecognition;
var reg= new speech();
function start() {
    document.getElementById("text_box").innerHTML="";
    document.getElementById("start").innerHTML="Starting..";
    reg.start();
}
reg.onresult=function (event) {
    document.getElementById("start").innerHTML="Click to speak again!";
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("text_box").value=content;
    if (content=="take my selfie") {
        speak();        
    } else {
console.log("Say 'take my selfie'") ;       
    }
}
function speak() {
    var synth=window.speechSynthesis;
    var data="Taking your selfie in 5 seconds...";
    var utter= new SpeechSynthesisUtterance(data);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
        Take_Pic();
        save_pic();
    },5000);
}
Webcam.set({
width: 300,
height: 250,
image_format:"png",
png_quality: 100
});
camera=document.getElementById("camera");
function Take_Pic() {
    Webcam.snap(function(data_url){
     document.getElementById("result").innerHTML="<img id='selfie' src='"+data_url+"'>";
    });
}
function save_pic() {
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click()
}