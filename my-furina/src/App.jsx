function App() {
  return (
      <div className="w-screen h-screen">
        <h1 className="absolute left-[504px] top-[212px] z-10 font-serif text-[228px] text-transparent bg-clip-text bg-linear-to-b from-[#353BA7] via-[#2D4286] to-[#698AE8] drop-shadow-2xl">
          My
        </h1>
        <h1 className="absolute left-[504px] top-[212px] z-9 font-serif text-[228px] [-webkit-text-stroke:24px_white] blur-xs">
          My
        </h1>
        <h2 className="absolute left-[809px] top-[441px] z-10 font-serif text-7xl text-transparent bg-clip-text bg-linear-to-b from-[#353BA7] via-[#2D4286] to-[#698AE8] drop-shadow-2xl">
          Furina
        </h2>
        <h2 className="absolute left-[809px] top-[441px] z-9 font-serif text-7xl [-webkit-text-stroke:24px_white] blur-xs">
          Furina
        </h2>
        <button className="absolute left-[565px] top-[565px] w-[397px] h-[85px] bg-white/50 border-4 border-white rounded-[60px] drop-shadow-2xl font-serif font-semibold text-3xl text-[#2D4286] hover:scale-110 transition-transform duration-300 z-10">Let the show begin!</button>
        <video src="[4K] Looped Furina Wallpaper.webm" type="video/webm" autoPlay muted loop className="fixed inset-0 min-w-0 min-h-0 z-0"></video>
      </div>
  );
}

export default App;
