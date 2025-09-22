"use client";

import { Badge, Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Projects() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our Recent Projects
          </h2>
          <p className="md:text-md">
            Explore our innovative valve solutions and engineering expertise.
          </p>
        </header>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Sappi Ngodwana</a>
            </h3>
            <p>
              March 2025 Approximately 110 valves were completed over a two-week
              period with a team of 68 people.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">On-site Services</a>
              </Badge>
              <Badge>
                <a href="#">In-situ Refurbishment</a>
              </Badge>
              <Badge>
                <a href="#">Safety valve</a>
              </Badge>
              <Badge>
                <a href="#">Manual Valve</a>
              </Badge>
              <Badge>
                <a href="#">Valve Testing</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Xina Shutdown</a>
            </h3>
            <p>July 2025</p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Refurbishment</a>
              </Badge>
              <Badge>
                <a href="#">PSV Valves</a>
              </Badge>
              <Badge>
                <a href="#">Control Valves</a>
              </Badge>
              <Badge>
                <a href="#">On-Site Services</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Air Liquide Secunda</a>
            </h3>
            <p>
              May - June 2025 On-site refurbishment and testing of PSV valves,
              including oxygen cleaning. Team 0f 10 people.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">On-site Services</a>
              </Badge>
              <Badge>
                <a href="#">PSV Valves</a>
              </Badge>
              <Badge>
                <a href="#">Valve Testing</a>
              </Badge>
              <Badge>
                <a href="#">Oxygen Cleaning</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Shutdown</a>
            </h3>
            <p>Feb ???? May 2025 More info needed here...</p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Engineering Solutions</a>
              </Badge>
              <Badge>
                <a href="#">Client Focused</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">BPC Shutdown</a>
            </h3>
            <p>
              Feb - May 2025 Team of 35–47 people carried out a full
              refurbishment of the boiler, turbine, and auxiliary lines. More
              than 700 valves were refurbished.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Safety Valve</a>
              </Badge>
              <Badge>
                <a href="#">Manual Valve</a>
              </Badge>
              <Badge>
                <a href="#">Refurbishment</a>
              </Badge>
              <Badge>
                <a href="#">Control Valve</a>
              </Badge>
              <Badge>
                <a href="#">Trevi Testing</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Ilanga Shutdown</a>
            </h3>
            <p>
              July 2025 The shutdown lasted two weeks and required a team of 14
              people. This was followed by two weeks of commissioning and
              testing, completed by a team of 3 people.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Manual Valves</a>
              </Badge>
              <Badge>
                <a href="#">PSV Valves</a>
              </Badge>
              <Badge>
                <a href="#">Refurbishment</a>
              </Badge>
              <Badge>
                <a href="#">Fault Finding</a>
              </Badge>
              <Badge>
                <a href="#">Trevi Testing</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
        </div>
        <footer className="mt-8 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all" variant="secondary" size="primary">
            View all
          </Button>
        </footer>
      </div>
    </section>
  );
}
