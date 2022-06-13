import { useState } from 'react';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const setFeedback = event => {
    switch (event.currentTarget.id) {
      case 'good':
        setGoodFeedback(prevState => {
          return prevState + 1;
        });
        break;
      case 'neutral':
        setNeutralFeedback(prevState => {
          return prevState + 1;
        });
        break;
      case 'bad':
        setBadFeedback(prevState => {
          return prevState + 1;
        });
        break;
      default:
        return 0;
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalRates = countTotalFeedback();
    return good > 0 ? Math.round((good / totalRates) * 100) : 0;
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={setFeedback}
      />
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

export default App;
