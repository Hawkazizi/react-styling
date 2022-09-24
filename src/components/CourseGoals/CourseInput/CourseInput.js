/* eslint-disable no-sequences */
import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [valid, setValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);

      return;
    }
    props.onAddGoal(enteredValue);
    setValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!valid ? "deactive" : ""} `}>
        <label>Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
