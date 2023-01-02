import React from "react";

const useTimer = () => {
  const interval = React.useRef();
  const [timer, setTimer] = React.useState(null);

  const timerDisplayValue = (duration) => {
    const seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60);

    return `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    const startTime = new Date();
    interval.current = setInterval(() => {
      setTimer(timerDisplayValue(new Date().getTime() - startTime.getTime()));
    }, 1000);
  };

  const stopTimer = () => {
    console.log("??", interval);
    clearInterval(interval.current);
  };

  return { timer, startTimer, stopTimer };
};

export default useTimer;
