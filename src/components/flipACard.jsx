import React from "react";
import { cardData } from "../utils/constants";
import FlipCard from "../components/flipCard";
import classes from "../styles/app.module.css";
import useTimer from "../hooks/useTimer";
import confetti from "canvas-confetti";

const FlipACard = () => {
  const [activeMatch1, setActiveMatch1] = React.useState(null);
  const [activeMatch2, setActiveMatch2] = React.useState(null);
  const [totalClicks, setTotalClicks] = React.useState(0);
  const [history, setHistory] = React.useState([]);

  const { timer, startTimer, stopTimer } = useTimer();

  React.useEffect(() => {
    if (history.length === 4) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      stopTimer();
    }
  }, [history]);

  const onMatch = (cardId) => {
    if (cardData[activeMatch1] === cardData[cardId]) {
      setHistory([...history, activeMatch1, cardId]);
    }
  };

  const onCardClick = (cardId) => {
    if (!timer) {
      startTimer();
    }

    if (activeMatch1 === cardId || activeMatch2 === cardId) {
      if (activeMatch1 === cardId) {
        setActiveMatch1(activeMatch2);
        setActiveMatch2(null);
      } else {
        setActiveMatch2(null);
      }
      return;
    }

    setTotalClicks(totalClicks + 1);
    if (activeMatch1 !== null && activeMatch2 !== null) {
      onMatch(cardId);
      setActiveMatch1(cardId);
      setActiveMatch2(null);
      return;
    }

    if (activeMatch1 === null) {
      setActiveMatch1(cardId);
    } else {
      onMatch(cardId);
      setActiveMatch2(cardId);
    }
  };

  return (
    <div className={classes.playgroundWrapper}>
      <p className={classes.totalCountText}>Timer: {timer ?? "-"}</p>
      <p className={classes.totalCountText}>Total clicks: {totalClicks}</p>
      <div className={classes.playground}>
        {cardData.map((card, cardId) => (
          <FlipCard
            key={cardId}
            uniqueId={cardId}
            content={card}
            isFlipped={
              cardId === activeMatch1 ||
              cardId === activeMatch2 ||
              history.includes(cardId)
            }
            isDisabled={history.includes(cardId)}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FlipACard;
