"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout192() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-midnight ">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Excellence</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Our Commitment to Quality and Innovation
            </h2>
            <p className="md:text-md">
              At Enserve Engineering Services, we strive to deliver exceptional
              valve solutions tailored to the needs of our industrial clients.
              Our mission is to ensure reliability and efficiency through
              innovative engineering practices.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Contact"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
