import React, { useEffect, useState } from "react";
import data from "../assets/data.json";
import { Link } from "react-router-dom";

const CrewSelected = (id) => {
  const dataDic = data["crew"];
  const [img, setimg] = useState();
    console.log(img)
  const dataCrew = dataDic.find((dest) =>
    dest.name.toLowerCase() === id.id.replace("_", " ")
  );

  useEffect(()=> setimg(dataCrew.images.png), [dataCrew])
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-10">
      <div className="text-white font-Bellefair font-normal text-[21px] flex justify-center flex-col items-center text-center gap-6 leading-8">
        <div className="flex flex-col gap-4 leading-none">
          <h2 className="opacity-50 uppercase">{dataCrew.role}</h2>
          <h1 className="text-[28px] uppercase">{dataCrew.name}</h1>
        </div>
        <p className="text-[16px] font-Barlow">{dataCrew.bio}</p>
      </div>
      <div>
        <ul className=" flex gap-5">
          {dataDic.map((crew) => (
            <Link
              key={crew.name}
              to={`/crew/${crew.name.replace(" ", "_").toLowerCase()}`}
            >
              {crew.name.toLowerCase() == id.id.replace("_", " ") ? (
                <li className="w-3 h-3 bg-white rounded-full"></li>
              ) : (
                <li className="w-3 h-3 bg-white/40 rounded-full"></li>
              )}
            </Link>
          ))}
        </ul>
      </div>
      <div
        className="relative w-full h-90 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${dataCrew.images.png})` }}
      >
        <div class="absolute inset-0 bg-linear-to-t from-black/70 from-0% to-transparent to-10%"></div>
      </div>
    </div>
  );
};

export default CrewSelected;
