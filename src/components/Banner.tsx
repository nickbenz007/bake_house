export const Banner = () => {
  return (
    <div className="flex w-full py-20 bg-gray-900 items-center justify-center">
      <div className="relative w-full h-full">
        {/* Background Image */}
        <img
          src="/src/assets/banner_1.png"
          alt="Banner One"
          className="w-full h-full object-contain pointer-events-none bg-no-repeat"
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center lg:px-6 px-0">
          <h2 className="lg:text-4xl text-2xl sm:text-3xl font-semibold tracking-wider">
            20% off on
          </h2>
          <h3 className="lg:text-4xl text-2xl sm:text-3xl font-semibold tracking-wider">
            your first order
          </h3>
          <p className="text-sm lg:text-xl font-normal text-gray-800 max-w-[90%] sm:max-w-md lg:mt-4 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            eveniet!
          </p>
          <button className="lg:px-6 px-3 lg:py-3 py-1.5 rounded-lg cursor-pointer hover:scale-110 transition-all delay-150 duration-150 text-white lg:text-lg text-sm bg-[var(--color-brown)] font-semibold tracking-wide lg:mt-6 mt-1">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
