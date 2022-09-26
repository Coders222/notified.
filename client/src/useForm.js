import React, { useState } from "react";

// Define the FormComponent outside of your useForm hook
const FormComponent = ({ setState, state, label }) => (
  <form>
    <label htmlFor={label}>
      {label}
      <input
        type="text"
        id={label}
        value={state}
        placeholder={label}
        onChange={e => setState(e.target.value)}
      />
    </label>
  </form>
);

export default function useForm(defaultState, label) {
  const [state, setState] = useState(defaultState);

  return [
    state,
    <FormComponent state={state} setState={setState} label={label} />,
    setState
  ];
}