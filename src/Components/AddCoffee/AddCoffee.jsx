import React from "react";
import { Form } from "react-router-dom";

const AddCoffee = () => {
  return (
    <div>
      <h1>add AddCoffee</h1>
      <div className="flex gap-8">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Coffee Name</span>
        </label>
        <label className="input-group">
          <span>Name</span>
          <input
            type="text"
            placeholder="Coffee name"
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Available Quantity</span>
        </label>
        <label className="input-group">
          <span>Quantity</span>
          <input
            type="text"
            placeholder="Available Quantity"
            className="input input-bordered"
          />
        </label>
      </div>
      </div>
    </div>
  );
};

export default AddCoffee;
