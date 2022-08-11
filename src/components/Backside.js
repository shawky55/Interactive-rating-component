import { ReactComponent as ThankyouImage } from '../images/illustration-thank-you.svg';
import classes from './Backside.module.css';

const Backside = ({ ratingValue }) => {
  return (
    <>
      {' '}
      <ThankyouImage />
      <div className={classes.ratingResult}>You selected {ratingValue} out of 5</div>
      <h1>Thank you!</h1>
      <p className={classes.desc}>
       We appreciate you taking the time to
        give a rating. If you ever need more support, don’t hesitate to get in
        touch!
      </p>
    </>
  );
};
export default Backside;
