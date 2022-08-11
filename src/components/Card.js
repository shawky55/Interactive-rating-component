import { useState } from 'react';
import { ReactComponent as Logo } from '../images/icon-star.svg';
import Backside from './Backside';
import Button from './Button';
import SubmitButton from './SubmitButton';
import classes from './Card.module.css';

const Card = (props) => {
  const [ratingValue, setRatingValue] = useState(null);
  const [submitState, setSubmitState] = useState(false);
  const [buttonState, setButtonState] = useState(null);
  const submitCardHandler = (ratingValue) => {
    if (ratingValue) {
      setSubmitState(true);
      console.log(ratingValue);
    }
  };
  const clickHandler = (value) => {
    setRatingValue(value);
    setButtonState(value);
    console.log(ratingValue);
  };
  return (
    <main className={classes.card}>
      {submitState || (
        <>
          <div className={classes.logo}>
            <Logo />
          </div>
          <h1>How did we do ?</h1>
          <p className={classes.cardDesc}>
            {' '}
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!{' '}
          </p>
          <div className={classes.buttonContainer}>
            <Button
              value={'1'}
              clickHandler={clickHandler}
              buttonState={buttonState}
            ></Button>
            <Button
              value={'2'}
              clickHandler={clickHandler}
              buttonState={buttonState}
            ></Button>
            <Button
              value={'3'}
              clickHandler={clickHandler}
              buttonState={buttonState}
            ></Button>
            <Button
              value={'4'}
              clickHandler={clickHandler}
              buttonState={buttonState}
            ></Button>
            <Button
              value={'5'}
              clickHandler={clickHandler}
              buttonState={buttonState}
            ></Button>
          </div>
          <SubmitButton
            ratingValue={ratingValue}
            submitCardHandler={submitCardHandler}
          ></SubmitButton>
        </>
      )}
      {!submitState || <Backside ratingValue={ratingValue}></Backside>}
    </main>
  );
};

export default Card;
