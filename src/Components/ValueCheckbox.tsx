import React, { useState } from "react";
import { Checkbox } from "@mui/material";

const ValueCheckbox = ({ value }: { value: boolean }): JSX.Element => {
  const [currentValue, setCurrentValue] = useState<boolean>(value);
  const handleChange = (): void => {
    setCurrentValue((val) => !val);
  };
  return <Checkbox checked={currentValue} onChange={handleChange} />;
};
export default ValueCheckbox;
