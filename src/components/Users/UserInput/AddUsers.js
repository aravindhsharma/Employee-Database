import React, { useState, useRef } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  // const [isUsername, setIsUsername] = useState("");
  // const [isAge, setIsAge] = useState("");

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [isError, setIsError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: "Invalid Input",
        content: "Please Enter A Valid Username/Password.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setIsError({
        title: "Invalid Input",
        content: "Age should be greater than 1.",
      });
      return;
    }
    props.onAddUsers(enteredUsername, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setIsUsername("");
    // setIsAge("");
  };

  // const usernameHandler = (event) => {
  //   setIsUsername(event.target.value);
  // };

  // const ageHandler = (event) => {
  //   setIsAge(event.target.value);
  // };

  const errorHandler = () => {
    setIsError(null);
  };

  return (
    <Wrapper>
      {isError && (
        <ErrorModal
          title={isError.title}
          content={isError.content}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            // value={isUsername}
            // onChange={usernameHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (In years)</label>
          <input
            id="age"
            type="number"
            placeholder="Enter age"
            // value={isAge}
            // onChange={ageHandler}
            onConfirm={errorHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
