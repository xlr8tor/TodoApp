import React from "react";

const InputField = ({ onSubmit, onChange, value, addTodo }) => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        onSubmit(e);
        addTodo(value);
      }}
    >
      <div className="input-group mb-3">
        <input
          type="text"
          value={value}
          className="form-control"
          placeholder="What would you like to do?"
          onChange={onChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputField;
