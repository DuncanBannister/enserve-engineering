

import React from "react";

export function Layout38() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="flex items-center">
          <div className="w-full max-w-md">
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
              Expert Solutions for On-Site Valve Services Tailored to Your Needs
            </h3>
            <p className="text-text-alternative md:text-md">
              At Enserve, we prioritize quality and efficiency in all our
              on-site services. Our experienced team is dedicated to addressing
              the root causes of valve failures to ensure your operations run
              smoothly.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
