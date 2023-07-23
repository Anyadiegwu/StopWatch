import React from 'react';
import style from "../styles/Stopwatch.module.css";


function Stopwatch() {
    var startTime;
    var running = false;
    var elapsedTime = 0;
    var timerInterval;
    
    function start() {
      if (!running) {
        startTime = new Date().getTime();
        running = true;
        timerInterval = setInterval(update, 10);
      }
    }
    
    function pause() {
      if (running) {
        running = false;
        clearInterval(timerInterval);
      }
    }
    
    function reset() {
      if (!running) {
        clearInterval(timerInterval);
        elapsedTime = 0;
        document.getElementById(style.display).innerHTML = "00:00:00.000"
      }
    }
    
    function update() {
      if (running) {
        var currentTime = new Date().getTime();
        elapsedTime += (currentTime - startTime);
        startTime = currentTime;
    
        var hours = Math.floor(elapsedTime / 3600000);
        var minutes = Math.floor((elapsedTime % 3600000) / 60000);
        var seconds = Math.floor((elapsedTime % 60000) / 1000);
        var milliseconds = elapsedTime % 1000;
    
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 10) ? "00" + milliseconds : (milliseconds < 100) ? "0" + milliseconds : milliseconds;
    
    
     document.getElementById(style.display).innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
      }
    }

  return (
    <div>
        <div className={style.stopwatch}>
            <h1>Stopwatch</h1>
            <p id={style.display}>00:00:000</p>
            <div>
                <div id={style.buttons}>
                    <button type='button' onClick={pause} id={style.pause} 
                    className={style.btn}>Pause</button>
                    <button type='button' onClick={start} id={style.start} 
                    className={style.btn}>Start</button>
                    <button type='button' onClick={reset} id={style.reset} 
                    className={style.btn}>Reset</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stopwatch