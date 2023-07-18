import useReduceInput from "../hooks/use-reduceinput";

const SimpleInput = (props) => {
  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameIsInvalid,
    valueChangeHandler: inputChangeHandler,
    valueBlurHandler: inputBlurHandler,
    reset: resetNameInput,
  } = useReduceInput((value) => value.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useReduceInput((value) => value.match(".+@.+"));

  let formValid = false;
  formValid = nameIsValid && emailIsValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid && !emailIsValid) {
      return;
    }

    console.log(name);
    console.log(email);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClass = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          value={name}
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailIsInvalid && <p className="error-text">Email must be valid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
