import classes from "./styles/app.module.css";
import FlipACard from "./components/flipACard";

const App = () => {
  return (
    <div className={classes.container}>
      <FlipACard />
    </div>
  );
};

export default App;
