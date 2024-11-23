import React from "react";
import FormElement from "./FormElement";

const Form = ({ onChange, Values }) => {
  return (
    <section className="Form">
      <h2>Enter your Details</h2>
      <form action="" onChange={onChange}>
        {Object.keys(Values).map((field, key) => (
          <FormElement
            id={field}
            Value={Values[field]}
            label={field}
            key={key}
          />
        ))}
        {/* <pre>{JSON.stringify(Values, null, 2)}</pre> */}
      </form>
    </section>
  );
};

export default Form;
