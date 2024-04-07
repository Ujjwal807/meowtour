import { Link } from "react-router-dom";

function Package() {
  return (
    <div className="mt-8 flex flex-col items-center max-w-60">
      <div className="w-64 relative">
        <img src="/patawa.jpg" alt="PAtawa Img" />
      </div>
      <h4 className="text-3xl bottom-0 absolute skew-x-12  font-semibold bg-emerald-500 text-white px-2 ">
        Patara
      </h4>
      <p className="mt-3 font-semibold text-slate-700">6-DAY TOUR</p>
      <p className="text-xs text-gray-500 mt-1">
        A day trip to Patara, a few miles farther west from Kalkan, offers the
        chance to combine horseback riding, history and sand surfing.
      </p>
      <div className="flex justify-between w-full  pt-1 mt-2">
        <p className="font-bold">💲5000</p>
        <Link className="bg-emerald-600 text-white px-2 py-1 rounded flex items-center">
          Book Know
        </Link>
      </div>
    </div>
  );
}

export default Package;
