import React, { useEffect, useState } from 'react';

const Clock = () => {
  
  const [clockState, setClockState] = useState();

  useEffect(() =>{
    setInterval(() =>{
      const date = new Date();
      setClockState(date.toLocaleTimeString([], {hourCycle: 'h23', hour: 'numeric', minute: '2-digit'}).replace(":", " "));
    }, 5);
  }, []);

  return (
    <time id="Clock" className="font-face-gm">
      {clockState}
    </time>
  )
}

export default Clock
