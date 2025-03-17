import React from 'react'
import bgCrew from "/crew/background-crew-mobile.jpg"
import { useParams } from "react-router-dom";
import CrewSelected from '../components/CrewSelected.jsx';

const Crew = () => {
   const { id } = useParams();
  return (
    <div className="relative w-screen h-screen">
      <img className="fixed h-full w-full" src={bgCrew} alt="" />

      <div className="flex flex-col h-[90%] w-full absolute top-[15vh]">
        <div className="flex flex-col justify-around items-center h-[50%]">
          <div className="uppercase text-white flex justify-around w-[70%] [&_label]:text-[#D0D6F9]/25 [&_label]:font-bold [&_p]:tracking-[4px]">
            <label>02</label>
            <p>Meet your Crew</p>
          </div>
            <CrewSelected id={id}/>
        </div>
    
      </div>
    </div>
  );
}

export default Crew