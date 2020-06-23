import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let isValid = false;
    if (typeof validator === "function") {
      isValid = validator(value);
    }
    if (isValid) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function UseInput() {
  const maxLen = value => value.length < 10;
  const notAllowed = value => !value.includes("@");

  const name = useInput("Ms.", notAllowed);
  const email = useInput("@", maxLen);

  return (
    <div>
      <h1>1. useInput</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
      <input placeholder="email" {...email} />
    </div>
  );
}
