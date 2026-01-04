import Navbar from "../components/Navbar";

const Schedule = () => {
  return (
    <div>
      <video
        src="backgrounds/video/schedule.mp4"
        poster="backgrounds/poster/schedule.webp"
        autoPlay
        muted
        loop
        className="w-screen h-screen object-cover fixed inset-0 z-0"
        fetchPriority="high"
      ></video>
    </div>
  );
};

export default Schedule;
