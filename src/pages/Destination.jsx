import React, { useEffect, useState } from "react";
import bgDestination from "/destination/background-destination-mobile.jpg";
import data from "../assets/data.json";
import { Link, useNavigate, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Destination = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [disable, setDisable] = useState(false);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      "#planet_img",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.2 }
    )
      .fromTo(
        "#name",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.2 },
        0
      )
      .fromTo(
        "#description",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        0.7
      )
      .fromTo(
        "#info_p",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(
        "#distance",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 },
        1.5
      )
      .fromTo(
        "#time",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 },
        1.5
      )
  }, []);

  const animateIn = () => {
    let tlIn = gsap.timeline();
    tlIn
      .fromTo("#planet_img", { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo("#name", { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0)
      .fromTo("#description", { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0)
      .fromTo(
        "#info_p",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(
        "#distance",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 },
        1
      )
      .fromTo(
        "#time",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 },
        1
      );
  };
  const animateOut = () => {
    let tlOut = gsap.timeline();
    tlOut
      .fromTo("#planet_img", { opacity: 1 }, { opacity: 0, duration: 0.5 })
      .fromTo("#name", { opacity: 1 }, { opacity: 0, duration: 0.5 }, 0.3)
      .fromTo(
        "#description",
        { opacity: 1 },
        { opacity: 0, duration: 0.5 },
        0.5
      )
      .fromTo(
        "#info_p",
        { opacity: 1, y: 0 },
        { opacity: 0, y: -30, duration: 0.5 },
        0.5
      )
      .fromTo(
        "#distance",
        { opacity: 1, y: 0 },
        { opacity: 0, y: -30, duration: 0.5 },
        0.7
      )
      .fromTo(
        "#time",
        { opacity: 1, y: 0 },
        { opacity: 0, y: -30, duration: 0.5 },
        0.7
      );
  };

  const dataDic = data["destinations"];
  const dataDestination = dataDic.find(
    (dest) => dest.name.toLowerCase() === id
  );

  return (
    <div className="relative w-screen h-screen">
      <img className="fixed h-full w-full" src={bgDestination} alt="" />

      <div className="flex flex-col h-[90%] w-full absolute top-[15vh]">
        <div className="flex flex-col justify-between items-center h-[50%]">
          <div className="uppercase text-white flex justify-around w-[70%] [&_label]:text-[#D0D6F9]/25 [&_label]:font-bold [&_p]:tracking-[4px]">
            <label>01</label>
            <p>Pick your destination</p>
          </div>
          <img
            id="planet_img"
            className="w-[150px] h-[150px]"
            src={dataDestination.images.png}
            alt=""
          />
          <ul className="w-full text-[#D0D6F9] flex text-[17px] font-Barlow justify-around [&_li]:uppercase [&_li]:h-[30px] [&_button]:cursor-pointer">
            {dataDic.map((planet, index) => (
              <button
                key={planet.name}
                onClick={() => {
                  setDisable(true);
                  animateOut();
                  setTimeout(() => {
                    navigate(`/destination/${planet.name.toLowerCase()}`);
                    animateIn();
                  }, 1300);

                  setTimeout(() => {
                    setDisable(false);
                  }, 2500);
                }}
                disabled={id == planet.name.toLowerCase() ? true : disable}
              >
                <li
                  id={planet.name}
                  className={
                    id == planet.name.toLowerCase()
                      ? "text-white border-b-3 rounded-b-md transition-all duration-200"
                      : "hover:border-b-3 hover:rounded-b-md hover:border-white/60 hover:text-white/90 transition-all duration-200"
                  }
                >
                  {planet.name}
                </li>
              </button>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between items-center h-[50%]">
          <div className="text-center text-white [&_p]:text-[#D0D6F9]">
            <h1 id="name" className="text-[64px] font-Bellefair m-4">
              {dataDestination.name}
            </h1>
            <p
              id="description"
              className="text-[17px] font-Barlow tracking-[1px] m-5"
            >
              {dataDestination.description}
            </p>
            <div className="border-1 border-[#D0D6F9] m-8"></div>
            <div className="uppercase flex flex-col gap-5 tracking-[1px] font-extralight [&_h2]:text-[32px] [&_p]:text-[17px] [&_h2]:mb-5 [&_h2]:font-Bellefair">
              <p id="info_p">avg. distance</p>
              <h2 id="distance">{dataDestination.distance}</h2>
              <p id="info_p">est. travel time</p>
              <h2 id="time">{dataDestination.travel}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
