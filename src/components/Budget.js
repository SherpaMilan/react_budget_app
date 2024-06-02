
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, remaining, expenses } = useContext(AppContext);
    // The initial state of newBudget is set to the value of budget from the context. 
  const [newBudget, setNewBudget] = useState(budget)
  

   const totalExpenses = expenses.reduce((total, item) => {
     return (total += item.cost);
   }, 0);
  
  
      const handleBudgetChange = (e) => {
        const newBudgetValue = parseInt(e.target.value, 10);
      if (newBudgetValue < totalExpenses) {
        alert(
          "The value cannot be less than the amount already spent $" +
            totalExpenses
        )
      } else if (newBudgetValue > remaining) {
        alert("The value cannot exceed remaining funds $" + remaining);
      } else {
        setNewBudget(newBudgetValue);
      }
      };
 
    return (
      <div className="alert alert-secondary ">
        <span>Budget: {currency} </span>
        <input
          type="number"
          step="10"
          value={newBudget}
          onChange={handleBudgetChange}
        ></input>
      </div>
    );
};


export default Budget

