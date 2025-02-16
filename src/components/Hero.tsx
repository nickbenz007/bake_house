import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export const Hero = () => {
  const heroSmallText = useRef(null);
  const heroBigText1 = useRef(null);
  const heroBigText2 = useRef(null);
  const shopNowRef = useRef<HTMLDivElement>(null);
  const exploreNowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Text Animations
    tl.fromTo(
      heroSmallText.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' }
    )
      .fromTo(
        heroBigText1.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' },
        '-=1'
      )
      .fromTo(
        heroBigText2.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 2.0, ease: 'power2.out' },
        '-=1'
      );

    // Button Animations - Sliding from Left & Right with Bounce Effect
    gsap.fromTo(
      shopNowRef.current,
      { x: -100, opacity: 0, y: 300 },
      { opacity: 1, x: 0, duration: 1.9, ease: 'back.out(2.3)', y: 0 }
    );
    gsap.fromTo(
      exploreNowRef.current,
      { x: -100, opacity: 0, y: 300 },
      { opacity: 1, x: 0, duration: 1.9, ease: 'back.out(3.3)', y: 0 }
    );

    // Spin & Color Change Effect (Repeats every 5 seconds)
    gsap.fromTo(
      '.spin-s',
      {
        scale: 0,
        x: -20,
        y: -30,
      },
      {
        rotationY: 360,
        duration: 1.5,
        ease: 'power2.out',
        scale: 1.2,
        repeat: -1,
        x: 0,
        y: 0,
        repeatDelay: 3,
        color: 'random([#ff0000, #ff9900, #00ff00, #0099ff, #9900ff])',
      }
    );

    gsap.fromTo(
      '.spin-e',
      {
        scale: 0,
        x: -20,
        y: -30,
      },
      {
        rotationY: 360,
        duration: 1.5,
        scale: 1.2,
        ease: 'power2.out',
        repeat: -1,
        x: 0,
        y: 0,
        repeatDelay: 5,
        color: 'random([#ff0000, #ff9900, #00ff00, #0099ff, #9900ff])',
      }
    );
  });

  return (
    <div className="flex relative h-screen overflow-hidden">
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
          className="text-3xl 2xl:text-5xl text-color-gold font-poppins tracking-wider pointer-events-none"
        >
          Delicious Cafe
        </h1>
        <div className="flex flex-col gap-4">
          <h2
            ref={heroBigText1}
            className="text-4xl lg:text-5xl 2xl:text-6xl text-white font-sansita font-semibold tracking-wider pointer-events-none"
          >
            <span className="spin-s inline-block">S</span>weet Treats
          </h2>
          <h3
            ref={heroBigText2}
            className="text-4xl lg:text-5xl 2xl:text-6xl text-white font-sansita font-semibold tracking-wider pointer-events-none"
          >
            Perfect <span className="spin-e inline-block">E</span>ats
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-8 mt-14">
          <div ref={shopNowRef}>
            <button className="shop 2xl:px-8 2xl:py-3.5 lg:px-6 px-4 lg:py-2.5 py-1.5 cursor-pointer hover:scale-105 transition-all duration-150 delay-150 rounded-xl shadow-md hover:shadow-xl shadow-orange-800 bg-orange-900 text-white 2xl:text-2xl lg:text-xl text-lg font-semibold font-poppins">
              Shop Now
            </button>
          </div>
          <div ref={exploreNowRef}>
            <button className="learn 2xl:px-8 2xl:py-3.5 lg:px-6 px-4 lg:py-2.5 py-1.5 cursor-pointer hover:scale-105 transition-all duration-150 delay-150 rounded-xl shadow-md hover:shadow-xl shadow-orange-900 text-[var(--color-gold)] 2xl:text-2xl lg:text-xl text-lg font-semibold font-poppins">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
