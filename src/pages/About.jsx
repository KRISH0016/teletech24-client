import React from "react";
import tce from "../assets/tce.png";
import Lottie from "react-lottie";
import animationData from "../lotties/ece1.json";
// import { useMediaQuery } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mobileCheck = useMediaQuery("(min-width: 1000px)");

  return (
    <div className="relative flex flex-col mt-9">
      <h1 className="text-6xl sm:text-9xl font-bold text-black/40 absolute -z-55 left-8">
        ABOUT
      </h1>

      <div className="w-full justify-start">
        <div>
          <div
            className={` gap-6 items-center flex ${
              mobileCheck ? "flex-row" : "flex-col"
            }`}
          >
            <img src={tce} alt="TCE" className="w-[600px]  z-20" />

            <p className="tracking-wider leading-8 sm:pr-2 px-6 justify-center"> 
              <span className="font-bold">Founded in 1957</span> by
              philanthropist and industrialist late{" "}
              <span className="font-bold">
                Shri Karumuthu Thiagarajan Chettiar
              </span>

              , Thiagarajar College of Engineering (TCE) is a Government Aided Institution and affiliated to Anna University and situated in Madurai, the Temple City .The college is funded by Central and State Governments and Management. The courses offered in TCE are approved by the All India Council for Technical Education (AICTE), New Delhi and Council of Architecture (COA), New Delhi. TCE was granted Autonomy in the year 1987 and the programmes have been accredited by the National Board of Accreditation (NBA). TCE offers 9 Undergraduate programmes, 10 Postgraduate programmes and Doctoral programmes in Engineering, Architecture and Science.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-5 lg:gap-28 items-center justify-center lg:border-2 lg:border-black/50 rounded-xl lg:m-9">
            <div className="lg:w-[300px] w-[300px] p-3 ">
              <Lottie options={defaultOptions} />
            </div>
            <p className="tracking-wider leading-8 px-4 lg:pl-9 lg:w-1/2">
              <span className="font-bold">TELETECH</span> is a National Level
              Symposium Conducted by the Department of Electronics and
              Communication Engineering (ECE), featuring flagship events such as
              workshops, hardware/software competitions, and paper
              presentations. Explore the latest advancements in
              telecommunications, electronics, and communication technology.
            </p>
          </div>
          <div className="flex  gap-5 lg:gap-28 items-center  lg:border-2 lg:border-black/50 rounded-xl lg:m-9 p-9">
            <p className="tracking-wider leading-8 px-4 lg:pl-9 ">
              <span className="font-bold text-2xl ">GENERAL GUIDELINES</span>
              <ol className="list-decimal">
              <li>
                  The registration fee includes Workshop + One Event.
                </li>
                <li>
                  The participants are requested to register for TeleTech’24
                  through the website ( QR code provided in the brochure), on or before
                  24th March, 2024.
                </li>
                <li>
                  Ensure your presence within 8:30 AM to commence the event
                  smoothly.
                </li>
                <li>
                  The events will be hosted at the Department of Electronics and
                  Communication Engineering, TCE.
                </li>
                <li>
                  Upon check-in, it is mandatory to possess your college ID
                  card.
                </li>
                <li>
                  All registered participants will receive Lunch and
                  Refreshments.
                </li>
                <li>
                  Only registered participants are allowed during check in
                  process and in events. In PAPER PRESENTATION event, teamleader
                  is required to complete the Google Form given in the
                  events page with accurate information.
                </li>
                <li>
                  Punctuality for all registered events is crucial to maximize
                  your involvement. This ensures you partake fully in enjoyment
                  and various activities
                </li>
                <li>
                  Participation certificates will be provided for all
                  participants.
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
