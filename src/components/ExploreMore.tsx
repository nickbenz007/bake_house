import { useState } from 'react';
import Data from '../Data.json';

type CategoryKey = keyof typeof Data.explore;

export const ExploreMore = () => {
  const categories = Object.keys(Data.explore) as CategoryKey[];
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>(
    categories[0]
  );

  return (
    <div className="flex flex-col gap-4 items-center justify-start bg-gray-900">
      {/* Section Heading */}
      <h2 className="lg:text-6xl text-2xl text-white font-semibold tracking-wider">
        Explore More
      </h2>

      <div className="flex flex-col w-full items-center justify-center py-8">
        {/* Categories */}
        <div className="flex items-center justify-center lg:text-xl text-sm text-white border-b border-gray-600 py-2">
          <ul className="flex lg:gap-8 gap-4 font-semibold">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer border-b-4 ${
                  selectedCategory === category
                    ? 'border-orange-900'
                    : 'border-gray-900 hover:border-orange-900'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Grid - Updates based on selectedCategory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-28">
          {Data.explore[selectedCategory].map((url, i) => (
            <div
              key={i}
              className="relative bg-gray-900 shadow-lg rounded-xl overflow-hidden xl:w-96 w-60 xl:h-96 h-60 border"
            >
              {/* Card Bg Image */}
              <img
                className="w-full h-full object-cover pointer-events-none bg-no-repeat"
                src={url}
                alt={selectedCategory}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
