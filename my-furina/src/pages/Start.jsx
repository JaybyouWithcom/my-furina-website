import { NavLink } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <h1 className="absolute left-126 top-53 z-10 font-lora text-[228px] text-transparent bg-clip-text bg-linear-to-b from-[#353BA7] via-[#2D4286] to-[#698AE8] drop-shadow-2xl">
        My
      </h1>
      <h1 className="absolute left-126 top-53 z-9 font-lora text-[228px] [-webkit-text-stroke:24px_white] blur-xs">
        My
      </h1>
      <h2 className="absolute left-202.25 top-110.25 z-10 font-lora text-7xl text-transparent bg-clip-text bg-linear-to-b from-[#353BA7] via-[#2D4286] to-[#698AE8] drop-shadow-2xl">
        Furina
      </h2>
      <h2 className="absolute left-202.25 top-110.25 z-9 font-lora text-7xl [-webkit-text-stroke:24px_white] blur-xs">
        Furina
      </h2>
      <video
        src="backgrounds/video/start.mp4"
        poster="backgrounds/poster/start.webp"
        autoPlay
        muted
        loop
        className="w-screen h-screen object-cover fixed inset-0 z-0"
        fetchPriority="high"
      ></video>
      <NavLink
        to="/home"
        className="flex justify-center items-center absolute left-141.25 top-141.25 w-99.25 h-21.25 bg-white/70 border-4 border-white rounded-[60px] drop-shadow-2xl font-prompt font-semibold text-3xl text-[#2D4286] hover:scale-110 transition-transform duration-300 z-10"
      >
        เริ่ม
      </NavLink>
    </div>
  );
};

export default Start;
