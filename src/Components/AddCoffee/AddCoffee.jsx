import React from "react";
import { Form } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const PhotoUrl = form.PhotoUrl.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      details,
      category,
      PhotoUrl,
    };
    console.log(newCoffee);
    // send data to the server
    fetch("http://localhost:5000/coffee", {
        method: 'Post',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Added Suceessfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-extrabold">add AddCoffee</h1>
      <Form onSubmit={handleAddCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex gap-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <span>Coffee Name</span>
              <input
                type="text"
                name="coffeeName"
                placeholder="Coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <span>Quantity</span>
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex gap-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <span>Supplier</span>
              <input
                type="text"
                name="supplier"
                placeholder="supplier name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form category and details row */}
        <div className="md:flex gap-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <span>Details</span>
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form photo url row */}
        <div className="gap-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo url</span>
            </label>
            <label className="input-group">
              <span>Photo url</span>
              <input
                type="text"
                name="PhotoUrl"
                placeholder="Photo url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <button className="btn btb"></button>
        <input
          type="submit"
          className="btn btn-block mt-10"
          value="add coffee"
        />
      </Form>
    </div>
  );
};

export default AddCoffee;
