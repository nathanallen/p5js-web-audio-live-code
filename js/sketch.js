
//create audio context
const audioContext = new AudioContext();

//setup oscillator
const oscillator = audioContext.createOscillator();
oscillator.frequency = 440;
oscillator.type = "sawtooth";
// oscillator.connect( audioContext.destination );
oscillator.start();

//setup master gain (volume)
const masterGain = audioContext.createGain();
masterGain.connect( audioContext.destination );
masterGain.gain.value = .01;
oscillator.connect( masterGain );


function setup() {

  //setup wafeform selection
  const oscWaveformElement = document.querySelector("#osc-waveform");

  oscWaveformElement.addEventListener("change", function(event) {
      event.preventDefault();

      oscillator.type = event.target.value;

  });


  //create canvas
  createCanvas(window.innerWidth, window.innerHeight)
}


function draw() {

  if (mouseIsPressed) {

    masterGain.gain.value = 1;

  } else {

    masterGain.gain.value = 0;

  }

}
