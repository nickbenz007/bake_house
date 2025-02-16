export const Banner2 = () => {
  return (
    <div className="flex w-full py-16 bg-gray-900 items-center justify-center">
      <div className="relative w-full h-full">
        {/* Background Image */}
        <img
          src="/assets/banner_2.png"
          alt="Banner One"
          className="w-full h-full object-contain pointer-events-none bg-no-repeat"
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="lg:text-6xl text-2xl text-white sm:text-5xl font-semibold tracking-wider">
            About Us
          </h2>
          <p className="text-sm lg:text-xl font-normal text-gray-200 max-w-[90%] lg:max-w-md lg:my-8 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            consectetur adipisicing elit. Quasi, eveniet!
          </p>
          <button className="lg:px-6 px-3 lg:py-3 py-1.5 rounded-lg cursor-pointer hover:scale-110 transition-all delay-150 duration-150 text-white lg:text-lg text-sm bg-[var(--color-brown)] font-semibold tracking-wide lg:mt-6 mt-1">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
