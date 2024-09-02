import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { RiBuildingLine } from "react-icons/ri";
import { GoStack } from "react-icons/go";

interface FormProps {
  name: string;
  imgURL: string;
}

const Card: React.FC<FormProps> = ({ name, imgURL }) => {
  return (
    <div className="card">
      <div className="imgBox">
        <div className="imgContainer">
          <img src={imgURL} alt="" />
        </div>
      </div>
      <div className="time">24h Ago</div>
      <h3>{name}</h3>
      <div className="highlights">
        <span>
          <MdOutlinePersonAddAlt1 />
          1-3yrs Exp
        </span>
        <span>
          <RiBuildingLine />
          Onsite
        </span>
        <span>
          <GoStack />
          12LPA
        </span>
      </div>
      <ul className="keyPoints">
        <li>
          A user-friendly interface lets you browse stunning photos and videos
        </li>
        <li>
          Filter destinations based on interests and travel style, and create
          personalized
        </li>
      </ul>
      <button>Apply Now</button>
    </div>
  );
}

export default Card;
