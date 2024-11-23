import React from "react";

const dummyOnChange = () => {};
const FormElement = ({label , Value , id}) => {
  return (
    <div>
      <label>
        <strong>{label}</strong>
        <input type="text" name={id} value={Value} />
      </label>
    </div>
  );
};

export default FormElement;
