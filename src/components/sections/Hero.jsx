import StatusCard from "../dashboard/StatusCard";
import CiscoTerminal from "../dashboard/CiscoTerminal";
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* NOC Header */}

        <div className="mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-[4px] uppercase">
            Network Operations Center
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Konke Tekana
          </h1>

          <h2 className="text-2xl text-slate-300 mt-4">
            Aspiring Network Engineer
          </h2>

          <p className="max-w-3xl text-slate-400 mt-6 text-lg leading-8">
            Building and documenting enterprise networking solutions using
            Cisco technologies, Packet Tracer, IPv4, IPv6, VLANs, routing,
            switching, and network security.
          </p>
        </div>

        {/* NOC Status */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          <StatusCard
            title="Networking Labs"
            value="18"
            status="Operational"
          />

          <StatusCard
            title="Cisco Certificates"
            value="2"
            status="Verified"
          />

          <StatusCard
            title="Projects"
            value="12"
            status="Active"
          />

          <StatusCard
            title="Current Goal"
            value="CCNA"
            status="In Progress"
          />

        </div>

      </div>
      <CiscoTerminal />
    </section>
  );
}

export default Hero;