
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext)

    const handleDeleteExpense = () => {
      dispatch({
        type: "DELETE_EXPENSE",
        payload: props.id,
      });
    };
  
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    });

  }

    const decreaseAllocation = (name) => {
      const expense = {
        name: name,
        cost: 10,
      };

      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    };


  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.cost}</td>
      <td>
        <button
          onClick={(event) => increaseAllocation(props.name)}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#007bff",
            backgroundColor: "white",
            border: "2px solid #007bff",
            borderRadius: "0.25rem",
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          +
        </button>
      </td>
      <td>
        <button
          onClick={(event) => decreaseAllocation(props.name)}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#dc3545",
            backgroundColor: "white",
            border: "2px solid #dc3545",
            borderRadius: "0.25rem",
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          -
        </button>
      </td>
      <td>
        <button
          onClick={handleDeleteExpense}
          style={{
            padding: "0.25rem 0.5rem",
            fontSize: "1.8rem",
            color: "#dc3545",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s",
            boxShadow: "none",
          }}
        >
          <TiDelete size="1.5em" />
        </button>
      </td>
    </tr>
  );
}

export default ExpenseItem
