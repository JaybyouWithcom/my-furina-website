import Navbar from "../components/Navbar";

const ChatWithFurina = () => {
  return (
    <div>
      <video
        src="backgrounds/video/chatwithfurina.mp4"
        poster="backgrounds/poster/chatwithfurina.webp"
        autoPlay
        muted
        loop
        className="w-screen h-screen object-cover fixed inset-0 z-0"
        fetchPriority="high"
      ></video>
    </div>
  );
};

export default ChatWithFurina;
