import React, { Fragment } from "react";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function Comparison7() {
  return (
    <section id="comparison" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-primary text-white">
      <div className="container">
        {/* Header Section */}
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Automation</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Streamline Your Operations
          </h1>
          <p className="md:text-md">
            Enhance efficiency with cutting-edge automation solutions.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="mx-auto">
          {/* Product Headers */}
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="hidden h-full flex-col items-start justify-end py-4 pr-4 sm:py-6 sm:pr-6 md:flex lg:py-6 lg:pr-6">
              <h2 className="text-md leading-[1.4] font-bold md:text-xl">
                System Comparison
              </h2>
            </div>
            
            {/* Product Cards */}
            {["UCS", "DCS", "PLC"].map((system, index) => (
              <div 
                key={index}
                className={`flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6 ${
                  index === 0 ? "bg-background-secondary" : ""
                }`}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt={`${system} control system visualization`}
                    className="aspect-square w-full rounded-image object-cover"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                  <h2 className="text-md leading-[1.4] font-bold md:text-xl">
                    {system}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Details */}
          <div>
            {comparisonData.map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]"
              >
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-none md:pr-6">
                  {item.category}
                </p>
                {item.comparisons.map((comparison, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 ${
                      idx === 0 ? "bg-background-secondary" : ""
                    }`}
                  >
                    <span>{comparison}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button 
              title="Contact Us" 
              variant="link" 
              size="link" 
              iconRight={<RxChevronRight />}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Comparison data structure
const comparisonData = [
  {
    category: "Core Concept",
    comparisons: [
      "Next generation control system, fully software-defined control",
      "Distributed control system designed for process industries, handling complex control loops",
      "Logic-based control system, primarily for discrete manufacturing and automation"
    ]
  },
  {
    category: "Control Method",
    comparisons: [
      "Supports both process (DCS) and discrete (PLC) control with AI-driven optimization",
      "Mainly process control, capable of handling advanced loop control",
      "Focused on logic control, commonly used for sequential operations"
    ]
  },
  {
    category: "Data Processing Capability",
    comparisons: [
      "Supports edge computing + cloud computing with strong AI-driven data processing",
      "Limited computing power and data processing capability",
      "Limited computing power and data processing capability"
    ]
  },
  {
    category: "Response Time",
    comparisons: [
      "< 100μs real-time schedule delay",
      "50-500ms real-time schedule delay",
      "50-500ms real-time schedule delay"
    ]
  },
  {
    category: "Remote Maintenance",
    comparisons: [
      "Supports remote operations and cloud-based management",
      "Limited remote maintenance capabilities",
      "Limited remote maintenance capabilities"
    ]
  }
];