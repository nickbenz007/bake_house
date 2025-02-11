import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export const Hero = () => {
  const heroSmallText = useRef(null);
  const heroBigText1 = useRef(null);
  const heroBigText2 = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      heroSmallText.current,
      { opacity: 0, x: -100 },
      {
        opacity: 3,
        x: 0,
        duration: 1.5,
        stagger: 0.9,
        ease: 'power2.out',
      }
    );
    gsap.fromTo(
      heroBigText1.current,
      { opacity: 0, y: 100 },
      {
        opacity: 3,
        y: 0,
        duration: 1.5,
        stagger: 0.9,
        ease: 'power2.out',
      }
    );
    gsap.fromTo(
      heroBigText2.current,
      { opacity: 0, y: 100 },
      {
        opacity: 3,
        y: 0,
        duration: 2.0,
        stagger: 1.5,
        ease: 'power2.out',
      }
    );
  });
  return (
    <div className="flex relative h-screen">
      {/* Background Image */}
      <img
        className="w-full object-cover pointer-events-none bg-no-repeat"
        src="/assets/hero.png"
        alt="Hero"
      />

      {/* Text Content */}
      <div className="absolute 2xl:top-72 xl:top-60 lg:top-50 top-80 2xl:left-32 xl:left-20 lg:left-10 left-10">
        <h1
          ref={heroSmallText}
          className="text-3xl 2xl:text-5xl text-color-gold font-poppins tracking-wider"
        >
          Delicious Cafe
        </h1>
        <div className="flex flex-col gap-4">
          <h2
            ref={heroBigText1}
            className="text-4xl lg:text-6xl 2xl:text-8xl text-white font-sansita font-semibold"
          >
            Sweet Treats
          </h2>
          <h3
            ref={heroBigText2}
            className="text-4xl lg:text-6xl 2xl:text-8xl text-white font-sansita font-semibold"
          >
            Perfect Eats
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-8 mt-14">
          <button className="2xl:px-12 2xl:py-5 lg:px-8 px-4 lg:py-3 py-1.5 cursor-pointer hover:scale-105 transition-all duration-150 delay-150 rounded-xl shadow-md hover:shadow-xl shadow-orange-800 bg-orange-900 text-white 2xl:text-2xl lg:text-xl text-lg font-semibold font-poppins">
            Shop Now
          </button>
          <button className="2xl:px-12 2xl:py-5 lg:px-8 px-4 lg:py-3 py-1.5 cursor-pointer hover:scale-105 transition-all duration-150 delay-150 rounded-xl shadow-md hover:shadow-xl shadow-orange-900 text-[var(--color-gold)] 2xl:text-2xl lg:text-xl text-lg font-semibold font-poppins">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
