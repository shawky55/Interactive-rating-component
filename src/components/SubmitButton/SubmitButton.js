import classes from './SubmitButton.module.css';
const SubmitButton = ({ ratingValue, submitCardHandler }) => {
  return (
    <button
      className={classes.submitButton}
      onClick={() => submitCardHandler(ratingValue)}
    >
      SUBMIT
    </button>
  );
};

export default SubmitButton;
