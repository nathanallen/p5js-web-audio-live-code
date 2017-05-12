
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
  createCanvas(window.innerWidth, window.innerHeight)
}


function draw() {

}
