import Package from "../components/Package";

function Pricing() {
  return (
    <div className="max-w-screen-xl">
      <header className="relative ">
        <img
          src="/patawa.jpg"
          alt="headerImage"
          className="max-w-screen-md w-full "
          style={{
            WebkitMaskImage: "url(/splash.png)",
            maskImage: "url(/splash.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            maskSize: "contain",
          }}
        />
        <div className="text-overlay absolute left-1/3 top-1/3 p-4">
          <h2 className="text-4xl font-bold text-center text-white">All Packages</h2>
        </div>
      </header>
      <Package/>
    </div>
  );
}

export default Pricing;
