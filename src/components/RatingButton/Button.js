import style from './rating.module.css';
const Button = ({ value, clickHandler, buttonState }) => {
  let classes = `${style.button} ${buttonState === value ? style.active : ''} `;
  return (
    <>
      <button className={classes} onClick={() => clickHandler(value)}>
        {value}
      </button>
    </>
  );
};

export default Button;
