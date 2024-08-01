import React from 'react';
import { locationF } from '../locationF'

const LocationComponent = () => {
  return (
    <section className="w-full my-20">
      <div className="wrapper text-center space-y-8">
        <h3 className="font-body text-5xl font-bold text-white ">
          Explore Our State-of-the-Art Facilities
        </h3>
        <p className=" text-2xl font-Lato text-textColor ">
          Our gym is equipped with the latest fitness equipment, luxurious
          amenities, and a variety of classes to meet all your health and
          wellness needs. 
        </p>
      </div>
      <div className="wrapper grid grid-cols-1 gap-10 ss:grid-cols-2 md:grid-cols-4">
        {locationF.map((location, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative h-full rounded-md overflow-hidden">
              <img
                src={location.icon}
                alt={location.name}
                loading="lazy"
                className="h-full w-full object-cover duration-300 ease-in-out hover:scale-105 hover:transform hover:cursor-pointer"
              />
              <div className="absolute left-1 bottom-4 text-xl text-white uppercase font-bold">
                {location.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationComponent
