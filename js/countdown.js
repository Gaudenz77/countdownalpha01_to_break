var count; 
var maxCount = getTimeValues(); /* sekunden inputfield */;

var intervalId;
function getTimeValues() {
  let  hours = parseInt(document.getElementById("stunden").value);
  let  minutes = parseInt(document.getElementById("minuten").value);
  let  seconds = parseInt(document.getElementById("sekunden").value);
  let total = (hours * 60 * 60) + (minutes * 60) + seconds

  console.log(seconds, minutes, hours);
  console.log(total);
  return total;   
}


// my layout //
let fieldOne = document.getElementById('first-field');
fieldOne.innerHTML = '';

let fieldTwo = document.getElementById('second-field');
fieldTwo.innerHTML = '';

let fieldThree = document.getElementById('third-field');
fieldThree.innerHTML = '';

function setDisplay(info) {  // kann String od Zahl sein
    document.getElementById("display").innerText = info;
  }

function startTimer() {
  stopTimer(); // falls es schomn eine Timer gibt: zuerst stoppen
  setDisplay(maxCount); // Unterfunktion, 
  count = maxCount;   // Counter in Anfangszustand
  // Verwende die Referenz (namen) OHNE KLAMMER, da die Funktion nur geholt(ref) und untenals ausführung gesetzt wird
  intervalId = setInterval(updateCounter, 1000); // jede sekunde zähler aktualisiert

}



function stopTimer() {
  // javascript-eigene funktion
  clearInterval(intervalId);

}


function updateCounter() {
/* Stunden= count/3600
  Minuten= count/60 */
  console.log('count =', count);
  count = count - 1; // kurzform count--;
  setDisplay(count);

  let hours = Math.floor(count / 3600);
  let minutes = Math.floor((count % 3600) / 60);
  let seconds = count % 60;

console.log(hours, minutes, seconds);

  setHours(hours);
  setMinutes(minutes);
  setSeconds(seconds);
  
  function setHours(h){  // kann String od Zahl sein
    document.getElementById("Hours").innerText = h;
  }
  function setMinutes(m){  // kann String od Zahl sein
    document.getElementById("Minutes").innerText = m;
  }
  function setSeconds(s){  // kann String od Zahl sein
    document.getElementById("Seconds").innerText = s;
  }




  
}












































