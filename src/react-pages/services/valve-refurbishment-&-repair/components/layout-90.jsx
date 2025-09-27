

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
            Discover Our Cutting-Edge Valve Refurbishment Workshop and Expert
            Technicians
          </h3>
          <p className="md:text-md">
            As a leading independent valve reconditioning company in South
            Africa, Enserve has repair centers throughout the country in
            Sasolburg, Mpumalanga, and KZN. Enserve has over thirty years'
            experience in reconditioning & pressure testing valves. All valve
            spares are of superior quality ensuring superior durability.
            Enserve’s repair services can be provided in house, on site and in
            site. The company's team of specialists refurbish valves to the OEM
            standards and specifications.
          </p>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
