import { useState, useEffect } from 'react';
import './App.css';

// ---------import components----------------
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  // state for feedbacks
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  // useEffect, save LS
  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  // callback function onLeaveFeedback
  const onLeaveFeedback = (option) => {
    setFeedback({ ...feedback, [option]: feedback[option] + 1 });
  };

  // callback finction onClearFeedback
  const onClearFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className="container">
      <Description />
      <Options
        onLeaveFeedback={onLeaveFeedback}
        totalFeedback={totalFeedback}
        onClearFeedback={onClearFeedback}
      ></Options>
      {totalFeedback > 0 && (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
      {totalFeedback == 0 && <Notification />}
    </div>
  );
};

export default App;
