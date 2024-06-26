import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses, currency } = useContext(AppContext);

  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col">Increase by 10</th>
          <th scope="col">Decrease by 10</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            name={expense.name}
            cost={`${currency} ${expense.cost}`} // Ensure currency is appended correctly
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
