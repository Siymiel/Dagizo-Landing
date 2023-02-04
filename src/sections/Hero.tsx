import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-yellow-400 grid justify-center items-center"
      style={{ height: "90vh" }}
    >
      <div>
        <p className="text-6xl font-extrabold text-white text-center uppercase">
          We help you organize
        </p>
        <p className="text-6xl font-extrabold text-gray-700 text-center uppercase pt-1">
          Your restaurant
        </p>
        <p className="text-xl font-normal text-white text-center pt-4">
          Scale your business today with our unified restaurant POS system that
          will help you provide exceptional
          <br /> customer satisfaction.
        </p>
        <div className="flex items-center justify-center space-x-10 pt-10">
          <button className="py-3 px-8 text-base font-medium uppercase rounded-full bg-white text-yellow-400">
            Request a demo
          </button>
          <button className="py-3 px-8 text-base font-medium uppercase rounded-full bg-black text-yellow-400">
            Start your free trial today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
