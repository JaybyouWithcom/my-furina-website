import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav
      className={`fixed inset-x-0 h-22.5 z-10 ${
        isOpen
          ? "bg-white/70 backdrop-blur-[6px] shadow-2xl"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="absolute flex inset-x-0 h-22.5 items-center justify-between p-7.5">
        <div className="flex space-x-7.5">
          <svg
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill={isOpen ? "#353BA7" : "#FFFFFF"}
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
          <h1
            className={`font-lora font-semibold text-4xl text-transparent bg-clip-text bg-linear-to-b from-[#353BA7] via-[#2D4286] to-[#698AE8] ${
              isOpen ? "block" : "hidden"
            }`}
          >
            My Furina
          </h1>
        </div>
        <ul
          className={`font-lora font-medium text-[20px] text-[#353BA7] space-x-20 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pomodoro">Pomodoro</NavLink>
          </li>
          <li>
            <NavLink to="/habits">Habits</NavLink>
          </li>
          <li>
            <NavLink to="/schedule">Schedule</NavLink>
          </li>
          <li>
            <NavLink to="/chatwithfurina">Chat with Furina</NavLink>
          </li>
        </ul>
        <button
          className={`bg-[#353BA7] rounded-[30px] justify-center items-center w-37.5 h-12.5 font-lora font-semibold text-[20px] text-white ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
