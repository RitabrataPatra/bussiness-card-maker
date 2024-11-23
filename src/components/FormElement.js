import React from "react";

const FormElement = ({label , value , id}) => {
  return (
    <div>
      <label>
        <strong>{label}</strong>
        <input type="text" name={id} value={value} />
      </label>
    </div>
  );
};

export default FormElement;
