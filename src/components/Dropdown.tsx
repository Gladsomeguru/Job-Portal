import React, { useState } from "react";

interface dropDownProps {
  icon: React.ReactNode;
  placeholder: string;
  list: string[];
  listname: string;
}

const Dropdown: React.FC<dropDownProps> = ({ icon, placeholder, list, listname }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [rotation, setRotation] = useState<number>(0);

  const filteredList = list.filter((location) =>
    location.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleItemClick = (location: string) => {
    setSelectedLocation(location);
    setInputValue(location);
    setIsActive(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsActive(true);
  };

  const handleIconClick = () => {
    setIsActive(!isActive);
    setRotation(rotation + 180);
  };

  return (
    <div className="dropdown">
      <div className="select">
        <input
          name="job_location"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          onClick={() => setIsActive(true)}
        />
        <div
          className="icon-wrapper"
          onClick={handleIconClick}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {icon}
        </div>
      </div>
      <ul className={`${listname} ${isActive ? "active" : ""}`}>
        {filteredList.length > 0 ? (
          filteredList.map((location) => (
            <li key={location} onClick={() => handleItemClick(location)}>
              {location}
            </li>
          ))
        ) : (
          <li>No matches found</li>
        )}
      </ul>
    </div>
  );
}

export default Dropdown;