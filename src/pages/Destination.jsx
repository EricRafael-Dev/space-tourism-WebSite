import React from "react";
import bgDestination from "/destination/background-destination-mobile.jpg";
import data from "../assets/data.json";
import { Link, useParams } from "react-router-dom";

const Destination = () => {
  const { id } = useParams();

  const dataDic = data["destinations"];
  const dataDestination = dataDic.find(
    (dest) => dest.name.toLowerCase() === id
  );

  return (
    <div className="relative w-screen h-screen">
      <img className="fixed h-full w-full" src={bgDestination} alt="" />

      <div className="flex flex-col h-[90%] w-full absolute top-[15vh]">
        <div className="flex flex-col justify-between items-center h-[50%]">
          <div className="uppercase text-white flex justify-around w-[70%] [&_label]:text-[#D0D6F9] [&_label]:font-light">
            <label>01</label>
            <p>Pick Your Destination</p>
          </div>
          <img className="w-[150px] h-[150px]" src={dataDestination.images.png} alt="" />
          <ul className="w-full text-[#D0D6F9] flex text-[17px] font-Barlow justify-around [&_li]:uppercase [&_li]:h-[30px]">
            {dataDic.map((planet, index) => (
              <Link key={planet.name} to={`/destination/${planet.name.toLowerCase()}`}>
                <li
                  className={
                    id == planet.name.toLowerCase()
                      ? "border-b-3 rounded-b-md border-white text-white"
                      : ""
                  }
                >
                  {planet.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between items-center h-[50%]">
          <div className="text-center text-white [&_p]:text-[#D0D6F9]">
            <h1 className="text-[64px] font-Bellefair m-4">
              {dataDestination.name}
            </h1>
            <p className="text-[17px] font-Barlow tracking-[1px] m-5">
              {dataDestination.description}
            </p>
            <div className="border-1 border-[#D0D6F9] m-8"></div>
            <div className="uppercase flex flex-col gap-5 tracking-[1px] font-extralight [&_h2]:text-[32px] [&_p]:text-[17px] [&_h2]:mb-5 [&_h2]:font-Bellefair">
              <p>avg. distance</p>
              <h2>{dataDestination.distance}</h2>
              <p>est. travel time</p>
              <h2>{dataDestination.travel}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
