import { IoSearchOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { TbChevronDown } from "react-icons/tb";
import Dropdown from "./Dropdown";
import Slider from "./Slider";


export default function Filter() {
  return (
    <div className="filter">
      <div className="filterItems">
        <IoSearchOutline className="icons" />
        <input name="search" placeholder="Search By Job Title, Role" />
      </div>
      <div className="filterItems">
        <CiLocationOn className="icons" />
        <Dropdown
          icon={<TbChevronDown />}
          placeholder="Preferred Location"
          list={["Chennai", "Bangalore", "Hyderabad", "Delhi"]}
          listname="locationsList"
        />
      </div>
      <div className="filterItems">
        <GoPerson className="icons" />
        <Dropdown
          icon={<TbChevronDown />}
          placeholder="Job Type"
          list={[
            "Front-End Developer",
            "Software Developer",
            "Data Analyst",
            "Data Engineer",
          ]}
          listname="jobsList"
        />
      </div>
      <Slider />
    </div>
  );
}
