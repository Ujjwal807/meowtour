/* eslint-disable react/prop-types */
import {
  FaStar,
  FaLongArrowAltRight,
  FaCalendar,
  FaStarHalf,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({ location, img, price }) {
  return (
    <div className="w-80 px-4 flex flex-col relative items-center ">
      <img src={`/${img}`}  alt="card" className="rounded-lg bg-cover" />
      <div
        className="flex items-center w-3/4 absolute top-44 bg-green-100 px-2 rounded py-1 mt-2 justify-between 
           "
      >
        <div className="flex items-center  ">
          <FaCalendar color="#2C7865" />
          <p className="ml-1 text-sm">6 Days</p>
        </div>
        <div className="flex items-center  ">
          <FaStar color="#ffa500" />
          <FaStar color="#ffa500" />
          <FaStar color="#ffa500" />
          <FaStar color="#ffa500" />
          <FaStarHalf color="#ffa500" />
          <p className="text-sm">4.5</p>
        </div>
      </div>
      <div className="flex flex-col justify-start  items-center mt-6 ">
        <h4 className="font-bold text-xl">{location}</h4>
      </div>
      <div className="flex justify-between w-full p-4 pt-1 mt-0">
        <Link className="bg-emerald-600 text-white px-2 py-1 rounded flex items-center">
          Explore <FaLongArrowAltRight className="ml-2 mt-1" />
        </Link>
        <p className="font-bold">
          <span className="text-xs text-gray-600 mr-2">From:</span>💲{price}
        </p>
      </div>
    </div>
  );
}

export default Card;
