import Navbar from "../components/Navbar";

const Pomodoro = () => {
  return (
    <div>
      <video
        src="backgrounds/video/pomodoro.mp4"
        poster="backgrounds/poster/pomodoro.webp"
        autoPlay
        muted
        loop
        className="w-screen h-screen object-cover fixed inset-0 z-0"
        fetchPriority="high"
      ></video>
    </div>
  );
};

export default Pomodoro;
