import React from "react";
import Card from "../../UI/Card";
import UserItem from "../UserItem/UserItem";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <UserItem key={user.id} id={user.id} onDelete={props.onDeleteItem}>
              {`${user.name} (${user.age} years old)`}
            </UserItem>
          ))
        ) : (
          <UserItem>No Records Found</UserItem>
        )}
      </ul>
    </Card>
  );
};

export default UsersList;
