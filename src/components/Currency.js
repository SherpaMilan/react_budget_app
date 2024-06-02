import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropdown = () => {
  const { dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: e.target.value,
    });
  };

  return (
    <div className="form-group alert alert-success">
      <label htmlFor="currency"> Switch Currency</label>
      <select className="form-control" id="currency" onChange={handleChange}>
        <option value="$">Dollar ($)</option>
        <option value="£">Pound (£)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Rupee (₹)</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;
