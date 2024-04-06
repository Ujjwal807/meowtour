import { FiMapPin } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { FaStar } from "react-icons/fa";


import { Link } from "react-router-dom";
function LocationHome() {
  return (
    <div className="flex justify-center max-w-[1300px] mx-auto w-full items-center mt-20">
      <div className=" w-full">
        <div className="flex justify-between w-full">
          <p>Locations</p>
          <Link>View All</Link>
        </div>
        <div>
          <div className="w-80 ">
            <img src="/hero.jpg" alt="card" className="rounded-lg" />
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center  ">
                <CiCalendarDate /> <p>6 Days</p>
              </div>
              <div className="flex items-center  ">
                <FaStar /> <p>6 Days</p>
              </div>
            </div>
            <h4>
              <FiMapPin />
              California
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationHome;
