import Card from "../components/Card";
import { Link } from "react-router-dom";
import locationData from "../data";
function LocationHome() {
  return (
    <div className="flex justify-center max-w-[1300px] mx-auto w-full items-center mt-20">
      <div className=" w-full">
        <div className="flex justify-between w-full  mb-4">
          <p className="font-bold">Locations</p>
          <Link className="font-bold text-teal-500">View All</Link>
        </div>
        <div className="flex justify-between">
          {locationData.map((el, i) => (
            <Card
              key={i}
              location={el.location}
              img={el.img}
              price={el.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationHome;
