function Home() {
  return (
    <div className="flex justify-between items-center">
      <div>shabad</div>
      <div>
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
        />
      </div>
    </div>
  );
}

export default Home;
