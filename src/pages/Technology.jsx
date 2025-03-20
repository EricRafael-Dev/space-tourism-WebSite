import React, { useState } from "react";
import bgTechnology from "/technology/background-technology-mobile.jpg";
import data from "../assets/data.json";
import { useNavigate, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Technology = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  useGSAP(() => {
    let tlCrew = gsap.timeline();
    tlCrew
      .fromTo("h2", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(
        "h1",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.2
      )
      .fromTo(
        "#description",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.3
      )
      .fromTo("#img_technology", { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
      .fromTo(`#${id}`, { y: 0 }, { y: -10, duration: 0.5 },0);
  }, [id]);

  const animateIn = (technology) => {
    let selectedtl = gsap.timeline();
    selectedtl.fromTo(
      `#${technology}`,
      { y: 0, },
      { y: -10, duration: .5 }
    );
  };

  const animateOut = () => {
    let selectedtlOut = gsap.timeline();
    let tlTechnologyOut = gsap.timeline();

    selectedtlOut.fromTo(
      `#${lastTechnology}`,
      { y: -10 },
      { y: 0, duration: .5 }
    );

    tlTechnologyOut
      .fromTo("h2", { y: 0, opacity: 1 }, { y: 50, opacity: 0, duration: .5 })
      .fromTo(
        "h1",
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0, duration: .5 },
        0.1
      )
      .fromTo(
        "#description",
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0, duration: .5 },
        0.2
      )
      .fromTo(
        "#img_technology",
        { opacity: 1 },
        { opacity: 0, duration: .7 },
        0
      );
  };

  const dataDic = data["technology"];
  const dataTechnology = dataDic.find(
    (dest) => dest.name.toLowerCase() === id.replace("_", " ")
  );

  const [disable, setDisable] = useState(false);
  const [lastTechnology, setLastTechnology] = useState(id);
  console.log(lastTechnology)
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
            id="img_technology"
            className="w-full h-[30vh] object-cover object-bottom"
            src={dataTechnology.images.portrait}
            alt=""
          />
        </div>
        <ul className="flex gap-7 [&_button]:cursor-pointer">
          {dataDic.map((technology, index) => (
            <button
              key={technology.name}
              id={technology.name.toLowerCase().replace(" ", "_")}
              onClick={() => {
                setDisable(true);
                animateOut();
                setLastTechnology(
                  technology.name.toLowerCase().replace(" ", "_")
                );
                setTimeout(() => {
                  navigate(
                    `/technology/${technology.name
                      .toLowerCase()
                      .replace(" ", "_")}`
                  );
                  animateIn(technology.name.toLowerCase().replace(" ", "_"));
                }, 700);
                setTimeout(() => {
                  setDisable(false);
                }, 1100);
              }}
              disabled={
                id == technology.name.toLowerCase().replace(" ", "_")
                  ? true
                  : disable
              }
              className={
                technology.name.toLowerCase() == id.replace("_", " ")
                  ? "text-[#0B0D17] bg-white text-xl h-12 w-12 rounded-full border-1 font-Bellefair flex justify-center items-center transition-colors duration-200"
                  : "text-white text-xl h-12 w-12 rounded-full border-1 font-Bellefair flex justify-center items-center hover:bg-white/50 hover:text-[#0B0D17]/80 transition-colors duration-200"
              }
            >
              {index + 1}
            </button>
          ))}
        </ul>
        <div className="text-white font-Bellefair font-normal text-[21px] flex justify-center flex-col items-center text-center gap-6 leading-8 p-10">
          <div className="flex flex-col gap-4 leading-none">
            <h2 className="opacity-50 uppercase">The Terminology...</h2>
            <h1 className="text-[28px] uppercase">{dataTechnology.name}</h1>
          </div>
          <p
            id="description"
            className="text-[16px] font-Barlow text-[#D0D6F9]"
          >
            {dataTechnology.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
