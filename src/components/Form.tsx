import React, { useState, ChangeEvent } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { LuArrowUpDown } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface FormProps {
  formVisible: boolean;
  closeClick: () => void;
}

const Form: React.FC<FormProps> = ({ formVisible, closeClick }) => {
  const [formValues, setFormValues] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    applicationDeadline: "",
    jobDescription: "",
  });

  const [dropdownVisible, setDropdownVisible] = useState({
    location: false,
    jobType: false,
  });

  const [dropdownOptions] = useState({
    location: ["Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"],
    jobType: ["Full-time", "Part-time", "Contract", "Internship"],
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const toggleDropdown = (field: keyof typeof dropdownVisible) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const selectOption = (field: keyof typeof formValues, option: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: option,
    }));
    setDropdownVisible((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const isNotEmpty = (value: string) => value.trim() !== "";
  const areBothSalariesFilled =
    isNotEmpty(formValues.salaryMin) && isNotEmpty(formValues.salaryMax);

  const filteredOptions = (field: keyof typeof dropdownOptions) =>
    dropdownOptions[field].filter((option) =>
      option.toLowerCase().includes(formValues[field].toLowerCase())
    );

  return (
    <div
      className="formBackground"
      style={{ display: formVisible ? "flex" : "none" }}
    >
      <IoMdCloseCircle className="closeIcon" onClick={closeClick} />
      <div className="formBox">
        <h2>Create Job Openings</h2>
        <form method="post" action="">
          <div className="formItem">
            <label className={isNotEmpty(formValues.jobTitle) ? "filled" : ""}>
              Job Title
            </label>
            <div className="formInput">
              <input
                name="jobTitle"
                placeholder="Choose preferred Job Title"
                value={formValues.jobTitle}
                onChange={handleInputChange}
                className={isNotEmpty(formValues.jobTitle) ? "not-empty" : ""}
              />
            </div>
          </div>
          <div className="formItem">
            <label
              className={isNotEmpty(formValues.companyName) ? "filled" : ""}
            >
              Company Name
            </label>
            <div className="formInput">
              <input
                name="companyName"
                placeholder="Amazon, Microsoft, Swiggy"
                value={formValues.companyName}
                onChange={handleInputChange}
                className={
                  isNotEmpty(formValues.companyName) ? "not-empty" : ""
                }
              />
            </div>
          </div>
          <div className="formItem">
            <label className={isNotEmpty(formValues.location) ? "filled" : ""}>
              Location
            </label>
            <div className="formInput">
              <input
                name="location"
                placeholder="Choose preferred Job Location"
                value={formValues.location}
                onChange={handleInputChange}
                className={isNotEmpty(formValues.location) ? "not-empty" : ""}
                onClick={() => toggleDropdown("location")}
              />
              <FaChevronDown
                onClick={() => toggleDropdown("location")}
                style={{
                  transform: dropdownVisible.location
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              />
            </div>
            {dropdownVisible.location && (
              <ul className="formDropdown">
                {filteredOptions("location").map((option, index) => (
                  <li
                    key={index}
                    onClick={() => selectOption("location", option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="formItem">
            <label className={isNotEmpty(formValues.jobType) ? "filled" : ""}>
              Job Type
            </label>
            <div className="formInput">
              <input
                name="jobType"
                placeholder="Choose preferred Job Type"
                value={formValues.jobType}
                onChange={handleInputChange}
                className={isNotEmpty(formValues.jobType) ? "not-empty" : ""}
                onClick={() => toggleDropdown("jobType")}
              />
              <FaChevronDown
                onClick={() => toggleDropdown("jobType")}
                style={{
                  transform: dropdownVisible.jobType
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              />
            </div>
            {dropdownVisible.jobType && (
              <ul className="formDropdown">
                {filteredOptions("jobType").map((option, index) => (
                  <li key={index} onClick={() => selectOption("jobType", option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="formItem">
            <label className={areBothSalariesFilled ? "filled" : ""}>
              Salary Range
            </label>
            <div className="salaryBox">
              <div className="formInput">
                <LuArrowUpDown className="formIcon" />
                <input
                  type="number"
                  name="salaryMin"
                  placeholder="₹0"
                  value={formValues.salaryMin}
                  onChange={handleInputChange}
                  className={
                    isNotEmpty(formValues.salaryMin) ? "not-empty" : ""
                  }
                />
              </div>
              <div className="formInput">
                <LuArrowUpDown className="formIcon" />
                <input
                  type="number"
                  name="salaryMax"
                  placeholder="₹12,00,000"
                  value={formValues.salaryMax}
                  onChange={handleInputChange}
                  className={
                    isNotEmpty(formValues.salaryMax) ? "not-empty" : ""
                  }
                />
              </div>
            </div>
          </div>
          <div className="formItem">
            <label
              className={
                isNotEmpty(formValues.applicationDeadline) ? "filled" : ""
              }
            >
              Application Deadline
            </label>
            <div className="formInput">
              <input
                name="applicationDeadline"
                value={formValues.applicationDeadline}
                onChange={handleInputChange}
                className={
                  isNotEmpty(formValues.applicationDeadline) ? "not-empty" : ""
                }
              />
              <MdOutlineCalendarToday className="formIcon" />
            </div>
          </div>
          <div className="formItem textarea">
            <label
              className={isNotEmpty(formValues.jobDescription) ? "filled" : ""}
            >
              Job Description
            </label>
            <div className="formInput">
              <textarea
                name="jobDescription"
                placeholder="Please share a description to let the candidate know more about the job role"
                style={{ height: "200px" }}
                value={formValues.jobDescription}
                onChange={handleInputChange}
                className={
                  isNotEmpty(formValues.jobDescription) ? "not-empty" : ""
                }
              />
            </div>
          </div>
          <div className="createjobButtons">
            <div className="draft">
              <span>Save Draft</span>
              <FaAnglesDown />
            </div>
            <div className="save">
              <span>Publish</span>
              <FaAnglesRight />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
