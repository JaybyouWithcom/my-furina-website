import Navbar from "../components/Navbar";

const Chatbot = () => {
  return (
    <div>
      <video
        src="backgrounds/video/chatbot.mp4"
        poster="backgrounds/poster/chatbot.webp"
        autoPlay
        muted
        loop
        className="w-screen h-screen object-cover fixed inset-0 z-0"
        fetchPriority="high"
      ></video>
    </div>
  );
};

export default Chatbot;
