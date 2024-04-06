function Hero() {
  return (
    <div className="flex justify-center max-w-[1300px] mx-auto w-full items-center	">
      <div className="flex justify-between items-center ">
        <div className="ml-8">
          <div className="font-extrabold text-8xl">Create Your </div>
          <div className="font-extrabold text-8xl mt-4 text-emerald-600">
            Adventure tour
          </div>
          <button className="px-3 py-2 mt-6 ml-4 font-extrabold bord text-emerald-400 rounded-full border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">
            Know More
          </button>
        </div>
        <div className="flex justify-center items-center  w-8/12">
          <img
            src="/hero.jpg"
            alt="hero-image"
            style={{
              WebkitMaskImage: "url(/splash.png)",
              maskImage: "url(/splash.png)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              maskSize: "contain",
            }}
            className="w-full mt-7 "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
