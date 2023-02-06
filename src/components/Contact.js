import cta from "../images/cta.jpg";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <Fade bottom>
      <div className="flex justify-center items-center w-full text-slate-800">
        <div className="flex justify-center items-center w-3/4 bg-gradient-to-br from-green-200 to-green-800  sm:overflow-scroll md:overflow-hidden lg:overflow-hidden my-12 rounded-2xl">
          <div className="md:w-4/5 lg:w-2/3 p-12">
            <h2 className="sm:text-3xl md:text-3xl lg:text-4xl font-semibold sm:pl-0 md:pl-0 lg:pl-10">
              Get in touch
            </h2>
            <p className="sm:text-xl md:text-xl lg:text-2xl md:mb-8 lg:mb-16 sm:pl-0 md:pl-0 lg:pl-10">
              Join the community of people who are changing the future.
            </p>
            <form
              action=""
              className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-4"
            >
              <div className="place-self-center">
                <label htmlFor="" className="block">
                  Name
                </label>
                <input type="text" className="block" />
              </div>
              <div className="place-self-center">
                <label htmlFor="" className="block">
                  Last Name
                </label>
                <input type="text" className="block" />
              </div>
              <div className="place-self-center">
                <label htmlFor="" className="block">
                  Email *
                </label>
                <input type="email" className="block" />
              </div>
              <div className="place-self-center">
                <label htmlFor="" className="block">
                  Message
                </label>
                <input type="text" />
              </div>
              <div className="place-self-center">
                <label htmlFor="" className="block">
                  Phone
                </label>
                <input type="text" className="block" />
              </div>
              <div className="place-self-center">
                <p>&nbsp;</p>
                <button className="text-xl font-semibold bg-green-800 text-slate-300 px-10 py-2 rounded-md">
                  Join
                </button>
              </div>
            </form>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(
      to right bottom,
      rgba(0, 0, 0, .7),
      rgba(30, 124, 255, 0)
    ), url(${cta})`,
              height: "60vh",
            }}
            className="sm:hidden md:hidden lg:block w-1/3 bg-cover bg-center"
          ></div>
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
