function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <h1 className="text-6xl font-bold text-center pt-32 text-blue-400">
        Konke Tekana
      </h1>

      <p className="text-center text-2xl mt-6">
        Aspiring Network Engineer
      </p>

      <p className="text-center mt-8 text-slate-400 max-w-3xl mx-auto">
        Building enterprise networks using Cisco technologies while documenting
        my learning journey through practical Packet Tracer labs.
      </p>

      <div className="flex justify-center gap-6 mt-10">
        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition">
          Download CV
        </button>

        <button className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition">
          View Projects
        </button>
      </div>
    </div>
  );
}

export default App;