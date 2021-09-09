import React from "react";
import Card from "../../UI/Card";

const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <Card>
      <li onClick={deleteHandler}>{props.children}</li>
    </Card>
  );
};

export default UserItem;
