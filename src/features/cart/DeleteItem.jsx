import React from "react";
import Button from "../../ui/Button";
import { deleteIitem } from "./cartSlice";
import { useDispatch } from "react-redux";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteIitem(pizzaId));
  }

  return (
    <Button onClick={handleDelete} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
