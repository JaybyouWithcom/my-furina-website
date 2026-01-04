import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <video
        src="backgrounds/video/home.mp4"
        poster="backgrounds/poster/home.webp"
        autoPlay
        muted
        loop
        className="object-cover fixed inset-0 z-0"
        fetchPriority="high"
      ></video>
    </div>
  );
};

export default Home;
