import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter new category"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary">
              ADD
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
