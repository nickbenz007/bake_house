import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <div className="relative flex w-full bg-gray-900 bg-[url('/assets/footer_bg.png')] bg-cover bg-center">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top of the background */}
      <div className="relative flex flex-col w-full items-center justify-center xl:px-44 lg:px-20 px-8">
        <div className="flex flex-row w-full items-center justify-between py-8">
          {/* Logo Section with Animation */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ rotateY: 0, scale: 1 }}
            animate={{
              rotateY: [0, 360, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              delay: 7, // Wait 7 seconds before starting animation
              duration: 2, // Rotate duration
              ease: 'easeInOut',
              repeat: Infinity, // Keep looping
              repeatDelay: 3, // Pause before repeating
            }}
          >
            <a href="/">
              <img
                className="w-20 h-20 object-cover"
                src="/src/assets/footer_logo.png"
                alt="Logo"
              />
            </a>
          </motion.div>

          {/* Social Media Section with Staggered Shaking Animation */}
          <div className="flex md:flex-row flex-col items-center text-center">
            <h4 className="text-lg lg:text-3xl text-[var(--color-gold)] font-normal tracking-wider m-4">
              Follow Us:
            </h4>
            <div className="flex gap-6">
              {['Vector1.png', 'Vector2.png', 'Vector3.png', 'Vector4.png'].map(
                (icon, index) => (
                  <motion.a
                    key={index}
                    href="/"
                    initial={{ rotate: 0 }}
                    animate={{
                      rotate: [-5, 5, -5, 0],
                    }}
                    transition={{
                      delay: 2 + index * 1.5, // Stagger effect
                      duration: 0.6,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatDelay: 4,
                    }}
                  >
                    <img
                      className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                      src={`/src/assets/${icon}`}
                      alt={`Social Icon ${index + 1}`}
                    />
                  </motion.a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full h-auto lg:gap-8 gap-16">
          {/* About Us Section */}
          <div className="col-span-1 flex flex-col items-start text-center">
            <h2 className="lg:text-4xl text-2xl text-[var(--color-gold)] font-bold tracking-wider py-8">
              About Us
            </h2>
            <p className="lg:text-2xl text-lg text-white font-normal tracking-wider py-1">
              (456) 789-12301
            </p>
            <p className="lg:text-2xl text-lg text-white font-normal tracking-wider py-1">
              info@bakery.com
            </p>
            <p className="lg:text-2xl text-lg text-white font-normal tracking-wider py-1">
              North 13th Street, <br /> Los Angeles, U.S.A
            </p>
          </div>

          {/* Explore Section (Links in a Column) */}
          <div className="col-span-1 flex flex-col items-start">
            <h2 className="lg:text-4xl text-2xl text-[var(--color-gold)] font-bold tracking-wider py-8">
              Explore
            </h2>
            <div className="flex flex-col gap-2 items-start">
              <a
                href="/"
                className="lg:text-2xl text-lg text-white font-normal tracking-wider hover:text-[var(--color-gold)]"
              >
                Home
              </a>
              <a
                href="/"
                className="lg:text-2xl text-lg text-white font-normal tracking-wider hover:text-[var(--color-gold)]"
              >
                Blog
              </a>
              <a
                href="/"
                className="lg:text-2xl text-lg text-white font-normal tracking-wider hover:text-[var(--color-gold)]"
              >
                Contact Us
              </a>
              <a
                href="/"
                className="lg:text-2xl text-lg text-white font-normal tracking-wider hover:text-[var(--color-gold)]"
              >
                Services
              </a>
            </div>
          </div>

          {/* Recent News Section */}
          <div className="col-span-1 flex flex-col items-start">
            <h2 className="lg:text-4xl text-2xl text-[var(--color-gold)] font-bold tracking-wider py-8">
              Recent News
            </h2>
            <div className="flex w-full items-center justify-start">
              <img
                src="/src/assets/muffin_1.jpg"
                className="w-14 h-14 m-4 object-cover bg-no-repeat pointer-events-none"
                alt="Footer Image"
              />
              <div className="flex flex-col">
                <h5 className="lg:text-lg text-sm text-[var(--color-gold)]">
                  Feb 16 2025
                </h5>
                <h5 className="lg:text-xl text-lg text-white">
                  Puffy pastry bliss
                </h5>
              </div>
            </div>
            <div className="flex w-full items-center justify-start">
              <img
                src="/src/assets/muffin_1.jpg"
                className="w-14 h-14 m-4 object-cover bg-no-repeat pointer-events-none"
                alt="Footer Image"
              />
              <div className="flex flex-col">
                <h5 className="lg:text-lg text-sm text-[var(--color-gold)]">
                  Feb 16 2025
                </h5>
                <h5 className="lg:text-xl text-lg text-white">
                  Puffy pastry bliss
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center py-20">
          <h6 className="lg:text-xl text-sm text-gray-400 font-semibold tracking-wider">
            © 2025 Bake House. All Rights Reserved
          </h6>
        </div>
      </div>
    </div>
  );
};
