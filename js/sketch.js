
//create audio context
const audioContext = new AudioContext();

//setup oscillator
const oscillator = audioContext.createOscillator();
oscillator.frequency = 440;
oscillator.type = "square";
oscillator.connect( audioContext.destination );
oscillator.start();


function setup() {


}


function draw() {

}
