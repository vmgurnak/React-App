import css from './Options.module.css';

const Options = ({ onLeaveFeedback, totalFeedback, onClearFeedback }) => {
  return (
    <div className={css.options}>
      <button className={css.button} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={onClearFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
