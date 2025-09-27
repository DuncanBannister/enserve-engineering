

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta36() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-primary text-white">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="mb-5 size-12 md:mb-6"
                alt="Relume logo"
              />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Valve Control Solutions
            </h2>
            <p>
              Discover our reliable manual and isolation valves for optimal flow
              control and safety.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button variant="primary">Contact</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="mb-5 size-12 md:mb-6"
                alt="Relume logo"
              />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Explore Our Range
            </h2>
            <p>
              Choose from Ermeto and Shaw valves for unmatched performance in
              demanding applications.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button variant="primary">Request</Button>
              <Button variant="secondary">Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
