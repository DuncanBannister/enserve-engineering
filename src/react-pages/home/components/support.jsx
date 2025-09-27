

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Support() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-midnight text-white">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Support</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Always Here for Your Valve Needs
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              At Enserve, we offer 24/7 support to ensure your operations run
              seamlessly. Our dedication to environmental compliance guarantees
              that our solutions are not only effective but also sustainable.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 lg:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Round-the-Clock
                </h6>
                <p>
                  We are always available to assist with your valve
                  requirements.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Eco-Friendly
                </h6>
                <p>
                  Our services adhere to the highest environmental standards for
                  responsible operations.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Contact" variant="secondary">
                Contact
              </Button>
              <Button
                title="Learn More"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
