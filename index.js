let voices;
let value;
let options;
let option;
function speak()
{
options=document.getElementById("lang");
option=options.value;
console.log(option);
value=document.getElementById("text1").value;
let utterance = new SpeechSynthesisUtterance(value);
utterance.volume = 1; // From 0 to 1
utterance.rate = 0.5; // From 0.1 to 10
utterance.pitch = 0.6; 
voices = speechSynthesis.getVoices();
console.log(voices);
for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === option) {
      utterance.voice = voices[i];
    }
  }
speechSynthesis.speak(utterance);
console.log(option);
}