import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: fname,
    valueIsValid: fnameIsValid,
    hasError: fnameIsInvalid,
    valueChangeHandler: fnameChangeHandler,
    valueBlurHandler: fnameBlurHandler,
    reset: resetFnameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lname,
    valueIsValid: lnameIsValid,
    hasError: lnameIsInvalid,
    valueChangeHandler: lnameChangeHandler,
    valueBlurHandler: lnameBlurHandler,
    reset: resetLnameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.match(".+@.+"));

  let formValid = false;
  formValid = fnameIsValid && lnameIsValid && emailIsValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!fnameIsValid && !lnameIsValid && !emailIsValid) {
      return;
    }

    console.log(fname);
    console.log(lname);
    console.log(email);

    resetEmailInput();
    resetFnameInput();
    resetLnameInput();
  };

  const fnameInputClass = fnameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lnameInputClass = lnameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fnameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="First Name"
            onBlur={fnameBlurHandler}
            onChange={fnameChangeHandler}
            value={fname}
          />
          {fnameIsInvalid && <p className="error-text">Last Name must not be empty.</p>}
        </div>
        <div className={lnameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="Last Name"
            onBlur={lnameBlurHandler}
            onChange={lnameChangeHandler}
            value={lname}
          />
          {lnameIsInvalid && <p className="error-text">First Name must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="Email"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
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

export default BasicForm;
