import React from "react";

const Banner = () => {
  return (
    <section className="border-gray-100 bg-clip-padding bg-red-700 bg-opacity-50 backdrop-blur-sm backdrop-filter border rounded-md">
      <div className="lg:flex lg:items-center mx-auto px-4 py-32 max-w-screen-xl lg:h-screen">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-extrabold text-3xl sm:text-5xl">
            Understand User Flow.
            <strong className="sm:block font-extrabold text-red-700"> Increase Conversion. </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga
            ducimus numquam ea!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              className="block bg-red-600 hover:bg-red-700 active:bg-red-500 shadow px-12 py-3 rounded focus:ring w-full sm:w-auto font-medium text-sm text-white focus:outline-none"
              href="#">
              Get Started
            </a>

            <a
              className="block shadow px-12 py-3 rounded focus:ring w-full sm:w-auto font-medium text-red-600 text-sm hover:text-red-700 focus:outline-none active:text-red-500"
              href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
