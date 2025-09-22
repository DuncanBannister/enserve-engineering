"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Services() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Services</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Our Key Services at Enserve Engineering
            </h2>
            <p className="md:text-md">
              At Enserve, we provide comprehensive valve solutions tailored to
              your industrial needs. Our expertise ensures reliability and
              efficiency in every service we offer.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Valve Supply
            </h3>
            <p>
              Quality valve supply from leading global manufacturers for all
              industrial applications.
            </p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Valve Refurbishment
            </h3>
            <p>
              Expert refurbishment services to extend the life of your valves
              and reduce costs.
            </p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Leak Detection and Repair (LDAR)
            </h3>
            <p>
              Advanced LDAR solutions using E-Soft software for accurate
              detection and compliance.
            </p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              On-Site Engineering
            </h3>
            <p>
              Professional on-site engineering services tailored to your
              specific operational requirements.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="Learn More" variant="secondary">
            Learn More
          </Button>
          <Button
            title="Request"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Request
          </Button>
        </div>
      </div>
    </section>
  );
}
