import { useState } from "react";
import Section from "./Components/Section";
import Feedback from "./Components/Feedback";
import Statistic from "./Components/Statistic";
import Notification from "./Components/Notification";
import "./App.css";

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [state, setState] = useState(INITIAL_STATE);

  const handleClick = ({ target }) => {
    const { name } = target;
    setState((prevState) => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const countTotalFeedback = (state) => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (state) =>
    Math.round((state.good / countTotalFeedback(state)) * 100);

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <Feedback handleClick={handleClick} />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback(state) === 0
          ? <Notification message="No feedback given" />
          : <Statistic good={state.good} neutral={state.neutral} bad={state.bad} total={countTotalFeedback(state)} positive={countPositiveFeedbackPercentage(state)} />}
      </Section>     
    </div>
  );
}

export default App;
