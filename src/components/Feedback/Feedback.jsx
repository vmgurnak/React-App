// import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <p>Cood:{good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
