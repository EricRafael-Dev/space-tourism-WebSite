import React from "react";
import bg_mb from "/home/background-home-mobile.jpg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const App = () => {
  useGSAP(() => {

    gsap.fromTo("h2", { opacity: 0 }, { opacity: 1, duration: 2, delay:0.3 });
    gsap.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 2, delay:0.5 });
    gsap.fromTo("p", { opacity: 0 }, { opacity: 1, duration: 2, delay:0.8 });
    gsap.fromTo("#explore", { opacity: 0 }, { opacity: 1, duration: 2, delay:0.8 });
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <img className="absolute h-full w-full" src={bg_mb} alt="" />

      <div className="flex flex-col justify-between h-[80%] absolute top-[10vh] m-5 ">
        <div className="text-white text-center flex flex-col justify-between h-[50%]">
          <h2 className="text-[19px] font-Barlow font-normal tracking-[2px] uppercase">
            So, you want to travel to
          </h2>
          <h1 className="text-[92px] font-Bellefair uppercase">Space</h1>
          <p className="text-[19px]/[27px] font-Barlow font-normal">
            Let’s face it. If you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div id="explore" className=" h-[40%] flex justify-center items-center">
          <Link to="/destination/moon">
            <div className="bg-white flex justify-center w-[144px] h-[144px] items-center rounded-full outline-transparent cursor-pointer hover:outline-[88px] hover:outline-[#FFFFFF]/10 transition-all duration-200">
              Explore
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
