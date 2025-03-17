import React, { useEffect } from "react";
import bgDestination from "/destination/background-destination-mobile.jpg";
import data from "../assets/data.json";
import { Link, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Destination = () => {
  const { id } = useParams();

  useGSAP(() => {
    gsap.to("p", { opacity: 100, duration: 2, delay: 1 });
  },[]);
 
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
            className="w-[150px] h-[150px]"
            src={dataDestination.images.png}
            alt=""
          />
          <ul className="w-full text-[#D0D6F9] flex text-[17px] font-Barlow justify-around [&_li]:uppercase [&_li]:h-[30px]">
            {dataDic.map((planet, index) => (
              <button key={planet.name}>
                <Link to={`/destination/${planet.name.toLowerCase()}`}>
                  <li
                    className={
                      id == planet.name.toLowerCase()
                        ? "border-b-3 rounded-b-md border-white text-white"
                        : "hover:border-b-3 hover:rounded-b-md hover:border-white/60 hover:text-white/90"
                    }
                  >
                    {planet.name}
                  </li>
                </Link>
              </button>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between items-center h-[50%]">
          <div className="text-center text-white [&_p]:text-[#D0D6F9]">
            <h1 className="name text-[64px] font-Bellefair m-4">
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
              <p>avg. distance</p>
              <h2 id="distance">{dataDestination.distance}</h2>
              <p>est. travel time</p>
              <h2 id="time">{dataDestination.travel}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
