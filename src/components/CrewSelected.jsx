import React, { useEffect, useState } from "react";
import data from "../assets/data.json";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const CrewSelected = ({ id }) => {
  const navigate = useNavigate();
  const [lastCrew, setLastCrew] = useState(id);
  const [disable, setDisable] = useState();
  const dataDic = data["crew"];
  const [img, setimg] = useState();
  const dataCrew = dataDic.find(
    (dest) => dest.name.toLowerCase() === id.replace("_", " ")
  );

  useGSAP(() => {
    let tlCrew = gsap.timeline();
    tlCrew
      .fromTo("h2", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(
        "h1",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        0.5
      )
      .fromTo(
        "#description",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        1
      )
      .fromTo("#img_crew", { opacity: 0 }, { opacity: 1, duration: 2 }, 0)
      .fromTo(
      `#${lastCrew}`,
      { scale: 1, opacity: "40%" },
      { scale: 1.3, opacity: "100%", duration: 0.5 }, 0)

  }, [id]);

  const animateIn = (technology) => {
    let selectedtl = gsap.timeline();
    selectedtl.fromTo(
      `#${technology}`,
      { scale: 1, opacity: "40%" },
      { scale: 1.3, opacity: "100%", duration: 0.5 }
    );
  };

  const animateOut = () => {
    let selectedtlOut = gsap.timeline();
    let tlCrewOut = gsap.timeline();

    selectedtlOut.fromTo(
      `#${lastCrew}`,
      { scale: 1.3, opacity: "100%" },
      { scale: 1, opacity: "40%", duration: 0.5 }
    );

    tlCrewOut
      .fromTo("h2", { y: 0, opacity: 1 }, { y: 50, opacity: 0, duration: 0.5 })
      .fromTo(
        "h1",
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0, duration: 0.5 },
        0.1
      )
      .fromTo(
        "#description",
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0, duration: 0.5 },
        0.2
      )
      .fromTo("#img_crew", { opacity: 1 }, { opacity: 0, duration: 0.7 }, 0);
  };

  useEffect(() => setimg(dataCrew.images.png), [dataCrew]);
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-10">
      <div className="text-white font-Bellefair font-normal text-[21px] flex justify-center flex-col items-center text-center gap-6 leading-8">
        <div className="flex flex-col gap-4 leading-none">
          <h2 className="opacity-50 uppercase">{dataCrew.role}</h2>
          <h1 className="text-[28px] uppercase">{dataCrew.name}</h1>
        </div>
        <p id="description" className="text-[16px] font-Barlow text-[#D0D6F9]">
          {dataCrew.bio}
        </p>
      </div>
      <div>
        <ul className=" flex gap-5">
          {dataDic.map((crew) => (
            <button
              key={crew.name}
              id={crew.name.toLowerCase().replace(" ", "_")}
              onClick={() => {
                setDisable(true);
                animateOut();
                setLastCrew(crew.name.toLowerCase().replace(" ", "_"));
                setTimeout(() => {
                  navigate(
                    `/crew/${crew.name.toLowerCase().replace(" ", "_")}`
                  );
                  animateIn(crew.name.toLowerCase().replace(" ", "_"));
                }, 700);
                setTimeout(() => {
                  setDisable(false);
                }, 2000);
              }}
              disabled={id == crew.name.toLowerCase() ? true : disable}
            >
              <li
                className={
                  crew.name.toLowerCase() == id.replace("_", " ")
                    ? "w-3 h-3 bg-white rounded-full"
                    : "w-3 h-3 bg-white opacity-[40%] rounded-full hover:bg-white/70"
                }
              ></li>
            </button>
          ))}
        </ul>
      </div>
      <div
        id="img_crew"
        className="relative w-full h-[60vh] bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${dataCrew.images.png})` }}
      ></div>
    </div>
  );
};

export default CrewSelected;
