import React, { useState } from "react";
import bgTechnology from "/technology/background-technology-mobile.jpg";
import data from "../assets/data.json";
import { Link, useParams } from "react-router-dom";

const Technology = () => {
  const { id } = useParams();

  const dataDic = data["technology"];
  const dataTechnology = dataDic.find(
    (dest) => dest.name.toLowerCase() === id.replace("_", " ")
  );

  return (
    <div className="relative w-screen h-screen">
      <img className="fixed h-full w-full" src={bgTechnology} alt="" />

      <div className="flex flex-col h-[90%] w-full absolute top-[15vh] gap-10 items-center">
        <div className="flex flex-col justify-around items-center w-full h-[50%] gap-20">
          <div className="uppercase text-white flex justify-around w-[70%] [&_label]:text-[#D0D6F9]/25 [&_label]:font-bold [&_p]:tracking-[4px]">
            <label>03</label>
            <p>Space Launch 101</p>
          </div>
          <img
            className="w-full h-[30vh] object-cover object-bottom"
            src={dataTechnology.images.portrait}
            alt=""
          />
        </div>
        <ul className="flex gap-7">
          {dataDic.map((technology, index) => (
            <Link key={technology.name}
              to={`/technology/${technology.name
                .replace(" ", "_")
                .toLowerCase()}`}
            >
              {technology.name.toLowerCase() == id.replace("_", " ") ? (
                <li className="text-[#0B0D17] bg-white text-xl h-12 w-12 rounded-full border-1 font-Bellefair flex justify-center items-center">
                  {index + 1}
                </li>
              ) : (
                <li className="text-white text-xl h-12 w-12 rounded-full border-1 font-Bellefair flex justify-center items-center">
                  {index + 1}
                </li>
              )}
            </Link>
          ))}
        </ul>
        <div className="text-white font-Bellefair font-normal text-[21px] flex justify-center flex-col items-center text-center gap-6 leading-8 p-10">
          <div className="flex flex-col gap-4 leading-none">
            <h2 className="opacity-50 uppercase">The Terminology...</h2>
            <h1 className="text-[28px] uppercase">{dataTechnology.name}</h1>
          </div>
          <p className="text-[16px] font-Barlow text-[#D0D6F9]">
            {dataTechnology.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
