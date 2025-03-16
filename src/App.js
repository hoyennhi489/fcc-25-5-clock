import { useState, useEffect, useRef } from "react";

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);

  const audioRef = useRef(null);

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(sessionLength * 60);
    }
  }, [sessionLength]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            playBeep();
          }
          if (prev === 0) {
            return handleTimerEnd();
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, isSession, breakLength, sessionLength]);

  const handleTimerEnd = () => {
    const nextIsSession = !isSession;
    setIsSession(nextIsSession);
    return nextIsSession ? sessionLength * 60 : breakLength * 60;
  };

  const playBeep = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => console.log("Audio play failed:", error));
    }
  };

  const reset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setIsSession(true);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleBreakChange = (amount) => {
    setBreakLength((prev) => {
      const newBreakLength = Math.min(60, Math.max(1, prev + amount));
      return isRunning ? prev : newBreakLength;
    });
  };

  const handleSessionChange = (amount) => {
    setSessionLength((prev) => {
      const newSessionLength = Math.min(60, Math.max(1, prev + amount));
      if (!isRunning) setTimeLeft(newSessionLength * 60);
      return newSessionLength;
    });
  };

  return (
    <div className="container text-center mt-5">
      <h1>25 + 5 Clock</h1>
      <div className="row">
        <div className="col">
          <h2 id="break-label">Break Length</h2>
          <button id="break-decrement" onClick={() => handleBreakChange(-1)}>-</button>
          <span id="break-length">{breakLength}</span>
          <button id="break-increment" onClick={() => handleBreakChange(1)}>+</button>
        </div>
        <div className="col">
          <h2 id="session-label">Session Length</h2>
          <button id="session-decrement" onClick={() => handleSessionChange(-1)}>-</button>
          <span id="session-length">{sessionLength}</span>
          <button id="session-increment" onClick={() => handleSessionChange(1)}>+</button>
        </div>
      </div>
      <div id="timer-label">{isSession ? "Session" : "Break"}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>
      <button id="start_stop" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button id="reset" onClick={reset}>Reset</button>
      <audio id="beep" ref={audioRef} src="/lofi-alarm-clock-243766.mp3"></audio>
    </div>
  );
};

export default App;