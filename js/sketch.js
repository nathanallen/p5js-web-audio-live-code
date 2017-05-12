
//create audio context
const audioContext = new AudioContext();

//setup oscillator
const oscillator = audioContext.createOscillator();
oscillator.frequency.value = 440;
oscillator.type = "sawtooth";
// oscillator.connect( audioContext.destination );
oscillator.start();

//setup master gain (volume)
const masterGain = audioContext.createGain();
masterGain.connect( audioContext.destination );
masterGain.gain.value = 0;
oscillator.connect( masterGain );

//setup LFO
const lfoOctaveRange = 4;
const maxLFOValue = 100 * 12 * lfoOctaveRange; // 100 per piano key
const maxLFORate = 8;

const lfo = audioContext.createOscillator();
lfo.frequency.value = maxLFORate;

const lfoGain = audioContext.createGain();
lfoGain.gain.value = maxLFOValue;
lfo.start();

lfo.connect( lfoGain );
lfoGain.connect( oscillator.detune );


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
