import './App.css';
import React, { useState} from 'react';

export default function EventLoopFunctioning() {
  const [event, setEvent] = useState(0);

  function onClickChange() {
    setEvent(111111111)
  }
  return (
    <div>
    <div className="maindiv">
      {/* {event} */}
      <div className="stack">
        <h1>Browser stack</h1>
        <div className="function">
        <p>function5</p>
        <p className="async">function4 - (async)</p>
        <p>function3</p>
        <p className="async">function2 - (async)</p>
        <p>function1</p>
        </div>
      </div>
      <div className="eventloop">
        <h1>Event Loop</h1>
       <img src= "https://www.jimphicdesigns.com/downloads/imgs-mockup/green-arrows-animated-circle.gif" alt='Event-Loop' height="50px" width="50px"/>
      </div>
      <div className="queue">
        <h1>Queue</h1>
        <p className="async">
        <div className="clock"><span className="cl">🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛</span></div>
        <div className="clock2"><span className="cl">🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛</span></div>
        function4 - (async)</p>
        <p className="async2">function2 - (async)</p>
      </div>
    </div>
    <div>
    <button type="button" onClick={onClickChange} >
  {event}
</button>
    </div>
  </div>
  )
}