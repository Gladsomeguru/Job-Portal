import React, { useState } from "react";

export default function Slider() {
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(1000);

   const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxSalary - 10);
    setMinSalary(value);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minSalary + 10);
    setMaxSalary(value);
  };


  return (
    <div className="slider-container">
      <div className="slider-top">
        <span>Salary Per Month</span>
        <div className="salary-values">
          <span id="minSalaryValue">{minSalary}</span>k -{" "}
          <span id="maxSalaryValue">{maxSalary}</span>k
        </div>
      </div>
      <div className="range-inputs">
        <input
          type="range"
          id="minSalaryRange"
          min="0"
          max="1000"
          step="10"
          value={minSalary}
          onChange={handleMinChange}
        />
        <input
          type="range"
          id="maxSalaryRange"
          min="0"
          max="1000"
          step="10"
          value={maxSalary}
          onChange={handleMaxChange}
        />
        <div
          className="slider-range"
          style={{
            left: `${(minSalary / 1000) * 100}%`,
            right: `${100 - (maxSalary / 1000) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
