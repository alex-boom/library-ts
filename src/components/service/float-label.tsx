import React, { useState, ReactElement, FC } from "react";

interface IFloatLabelProps {
  children: ReactElement;
  label: string;
  value: string;
  [key: string]: any; // for the rest of the props
}

const FloatLabel: FC<IFloatLabelProps> = ({ children, label, value, ...props }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className="label-wrap"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {React.cloneElement(children, { ...props, value })}
      <label className={`label${focus || (value && value.length !== 0) ? " label-float" : ""}`}>
        {label}
      </label>
    </div>
  );
};

export default FloatLabel;
