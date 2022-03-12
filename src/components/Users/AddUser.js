import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("";
  const [error, setError] = useState();
  // // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const usernameRef = useRef();
  const ageRef = useRef();
  const addUserHandler = (event) => {
    event.preventDefault();

    const userName = usernameRef.current.value;
    const userAge = ageRef.current.value;
    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    // if (+enteredAge < 1) {
    if (+userAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( >0 )",
      });
      return;
    }
    props.onAddUser({
      name: userName,
      age: userAge,
      id: Math.random.toString,
    });
    // setEnteredAge("");
    // setEnteredUsername("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onErrorClear={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            ref={usernameRef}
            // onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            ref={ageRef}
            // onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
