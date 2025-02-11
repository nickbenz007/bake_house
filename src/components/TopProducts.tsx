import Data from '../Data.json';

export const TopProducts = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-gray-900">
      {/* Section Heading */}
      <h2 className="lg:text-6xl text-3xl text-white font-semibold tracking-wider py-28">
        Top Products
      </h2>
      <div className="flex w-full items-center justify-center py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-6">
          {Data.products.map((el, i: number) => (
            <div
              key={i}
              className="relative bg-gray-900 shadow-lg rounded-xl overflow-hidden lg:w-80 w-72 lg:h-96 h-96"
            >
              {/* Card Bg Image */}
              <img
                className="w-full h-full object-cover pointer-events-none bg-no-repeat"
                src={el.card_bg_image}
                alt="Card background"
              />

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-between bg-black/40 text-white text-center p-4">
                <div>
                  {/* Product Image */}
                  <img
                    className="object-contain pointer-events-none bg-no-repeat"
                    src={el.card_image_url}
                    alt="Product Image"
                  />
                </div>
                {/* Card Text Content */}
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col gap-4 items-start">
                    <h3 className="text-2xl font-bold">{el.card_price}</h3>
                    <p className="text-xl font-normal text-white tracking-tight pointer-events-none">
                      {el.card_title}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 items-center">
                    <div className="items-center justify-center border hover:border-2 rounded-full w-8 h-8 text-center cursor-pointer hover:text-[var(--color-gold)]">
                      <span className="text-xl font-normal">i</span>
                    </div>
                    <button className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-[var(--color-brown)] cursor-pointer hover:scale-105 transition-all ease-linear delay-200 duration-150">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
