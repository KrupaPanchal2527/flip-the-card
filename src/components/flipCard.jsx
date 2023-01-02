import classes from "../styles/app.module.css";

const FlipCard = ({
  uniqueId,
  isFlipped,
  isDisabled,
  content,
  onCardClick
}) => {
  return (
    <div className={classes.card} onClick={() => onCardClick(uniqueId)}>
      <p>{isFlipped || isDisabled ? content : ""}</p>
    </div>
  );
};

export default FlipCard;
