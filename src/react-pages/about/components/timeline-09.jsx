

import { motion, useScroll, useTransform } from "framer-motion";
import React, { Fragment, useRef } from "react";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#7E0121"]),
  };
  return (
    <motion.div
      ref={circleRef}
      style={backgroundColor}
      className="z-20 mt-7 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white] md:mt-8"
    />
  );
};

export function Timeline9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-midnight text-white">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="relative z-10 w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Growth</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Enserve's Commitment to Sustainable Growth
              </h2>
              <p className="md:text-md">
                At Enserve, we prioritize sustainable growth for our
                stakeholders. Our engineering and maintenance services are
                designed to meet the evolving needs of our clients.
              </p>
            </div>
          </div>
          <div className="relative grid grid-cols-1 justify-items-center gap-12 md:gap-20">
            <div className="absolute flex h-full w-8 flex-col items-center justify-self-start md:justify-self-auto">
              <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-bg-midnight to-transparent" />
              <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-secondary-dark" />
              <div className="h-full w-[3px] bg-neutral-lighter" />
              <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-bg-midnight" />
              <div className="absolute top-[-50vh] h-[50vh] w-full bg-midnight" />
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 mt-4 flex w-full flex-col md:w-auto">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    1993
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Enserve Founded
                  </h4>
                  <p>
                    - Founded by Steve Bannister and Pieter van Schalkwyk in
                    South Africa. - Began trading from 28 Edison Boulevard,
                    Vanderbijlpark.
                  </p>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 mt-4 flex w-full flex-col items-start text-left md:w-auto md:items-end md:text-right">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    1999
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Sasol Chemical Industries
                  </h4>
                  <p>
                    - Started Control and Safety Valve reconditioning (ongoing).
                  </p>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 mt-4 flex w-full flex-col md:w-auto">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2002
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    ArcelorMittal, Saldanha Bay
                  </h4>
                  <p>
                    - Turnkey on-site valve reconditioning contract for Manual
                    Safety and Control Valves.
                  </p>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 mt-4 flex w-full flex-col items-start text-left md:w-auto md:items-end md:text-right">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2003
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Sasol Temane, Mozambique
                  </h4>
                  <p>
                    - Well Head Ball Valve redesign and remanufacture project.
                  </p>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 mt-4 flex w-full flex-col md:w-auto">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2005
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Sasol Chemical Industries, Sasolburg
                  </h4>
                  <p>- LDAR Services to all Social Business Units (ongoing).</p>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 mt-4 flex w-full flex-col items-start text-left md:w-auto md:items-end md:text-right">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2006
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    PetroSA, Mossel Bay
                  </h4>
                  <p>
                    - Reconditioning of Manual Valves. Engen Refinery, Durban
                    -On-site reconditioning of Safety Valves (ongoing).
                  </p>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 mt-4 flex w-full flex-col md:w-auto">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2007
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Impala Platinum, Springs
                  </h4>
                  <p>
                    - Supply and reconditioning of IPV Ball Valves (ongoing).
                  </p>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 mt-4 flex w-full flex-col items-start text-left md:w-auto md:items-end md:text-right">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2008
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    BPC Silebe Pikwe, Botswana
                  </h4>
                  <p>
                    - On-site valve reconditioning of Manual, Control, and
                    Safety Valves. Sasol, Secunda - On-site valve gland
                    repacking project.
                  </p>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 mt-4 flex w-full flex-col md:w-auto">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2009
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Eskom Tutuka
                  </h4>
                  <p>
                    - 3-year Manual and Safety Valve in-situ reconditioning
                    contract
                  </p>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 mt-4 flex w-full flex-col items-start text-left md:w-auto md:items-end md:text-right">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2012
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Eskom Tutuka
                  </h4>
                  <p>
                    - 3-year Manual and Safety Valve in-situ reconditioning
                    contract. BPC Silebe Pikwe, Botswana - On-site valve
                    reconditioning of Manual, Control, and Safety Valves.
                    PetroSA Shutdown - Reconditioning of Manual Valves.
                  </p>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 mt-4 flex w-full flex-col md:w-auto">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2013
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    BP, Nationwide
                  </h4>
                  <p>
                    - LDAR Services to all BP Depots (ongoing). Sapref
                    Prospecton, Durban - Turnkey on-site Manual Valve
                    reconditioning contract. KNPC Kuwait National Oil Company. -
                    3-year contract to supply LDAR services (ongoing).
                  </p>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 mt-4 flex w-full flex-col items-start text-left md:w-auto md:items-end md:text-right">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2015
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    PetroSA Shutdown
                  </h4>
                  <p>- Reconditioning of Manual Valves.</p>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 mt-4 flex w-full flex-col md:w-auto">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2016
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Sappi Ngodwana
                  </h4>
                  <p>
                    -First in-line safety valve pressure testing performed.
                    Botash Sua Pan - In-Line Safety Valve Pressure Testing
                    performed.
                  </p>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 mt-4 flex w-full flex-col items-start text-left md:w-auto md:items-end md:text-right">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2017
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Sasol Group
                  </h4>
                  <p>
                    - 5-year Manual, Safety, and Control Valve reconditioning
                    contract.
                  </p>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 mt-4 flex w-full flex-col md:w-auto">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2018
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    PetroSA Shutdown
                  </h4>
                  <p>
                    - Reconditioning of Manual Valves. Agency Acquisition -
                    Acquired Gem-Trim Agency for Southern Africa.
                  </p>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 mt-4 flex w-full flex-col items-start text-left md:w-auto md:items-end md:text-right">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2019
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Agency Acquisition
                  </h4>
                  <p>
                    - Acquired Dyna-Flo Control Valve Agency for Southern
                    Africa. Botswana Electricity Authority - In-situ
                    reconditioning of Manual and Safety Valves during outage.
                    Sasol Temane - Manual, Safety, and Control Valve contract.
                    Botswana Power Corporation - In-Line Safety Valve Pressure
                    Testing performed. SAPREF Shutdown - Overhauled Control
                    Valves and supplied additional new replacement Control
                    Valves.
                  </p>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 mt-4 flex w-full flex-col md:w-auto">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2020
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Agency Acquisition
                  </h4>
                  <p>
                    - Acquired CLARKE, SHAW, BLACKHALL, and ERMETO Agencies in
                    Southern Africa. - Acquired Gemű Valves distribution rights
                    for Secunda and Sasolburg.
                  </p>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 mt-4 flex w-full flex-col items-start text-left md:w-auto md:items-end md:text-right">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2021
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Sasol Ammonia Shutdown
                  </h4>
                  <p>
                    - Manual and Safety Valve reconditioning contract. Botswana
                    Power Corporation - Secured Valve Contract.
                  </p>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
