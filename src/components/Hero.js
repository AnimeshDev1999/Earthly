import sustain from "../images/sustain.jpg";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
        to right,
        rgba(0, 0, 0, .7),
        rgba(30, 124, 255, 0)
      ), url(${sustain})`,
        height: "60vh",
      }}
      className="flex flex-col justify-center items-center bg-cover w-full bg-gradient-to-r from-black text-slate-200"
    >
      <div className="flex flex-col justify-center items-start sm:w-4/5 md:w-3/4">
        <Fade bottom cascade>
          <h3 className="sm:text-xl md:text-2xl font-semibold mb-6">
            Let's contribute to a good cause
          </h3>
        </Fade>
        <Fade bottom>
          <p className="sm:text-5xl md:text-6xl font-bold mb-6">
            Switch to <span className="text-green-700">Earthly</span> products{" "}
            <br /> and help sustain the planet
          </p>
        </Fade>
        <Fade bottom cascade>
          <p className="sm:text-xl md:text-2xl mb-6">
            High quality eco friendly products
          </p>
        </Fade>
        <Fade bottom cascade>
          <button className="bg-green-800 sm:text-xl md:text-2xl rounded-lg font-semibold px-5 py-3 cursor-pointer">
            Switch to Earthly
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
