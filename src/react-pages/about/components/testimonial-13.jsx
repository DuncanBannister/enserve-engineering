

import React from "react";

export function Testimonial13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-primary text-white">
      <div className="container">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <div className="order-last md:order-first">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Testimonial image 1"
              className="aspect-square w-full rounded-image object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <blockquote className="text-xl font-bold md:text-2xl">
              In Loving Memory We memorate previous Director and Partner Gary Le
              Roux. Gary was friend and partner of Enserve from 1995. He was
              extremely popular amongst his peers, an avid family man and a true
              friend.
            </blockquote>
            <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
              <div>
                <p>Founder, Gary Le Roux</p>
              </div>
              <div className="mx-4 w-px self-stretch bg-background-alternative sm:mx-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
