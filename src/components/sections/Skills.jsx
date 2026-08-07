const skills = [
  {
    name: "IPv4",
    category: "Addressing",
    level: "Strong",
  },
  {
    name: "IPv6",
    category: "Addressing",
    level: "Learning",
  },
  {
    name: "Subnetting",
    category: "Addressing",
    level: "Strong",
  },
  {
    name: "VLANs",
    category: "Switching",
    level: "Strong",
  },
  {
    name: "Inter-VLAN Routing",
    category: "Routing",
    level: "Strong",
  },
  {
    name: "ACLs",
    category: "Security",
    level: "Learning",
  },
  {
    name: "DHCP",
    category: "Services",
    level: "Strong",
  },
  {
    name: "Cisco IOS",
    category: "Infrastructure",
    level: "Learning",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-[4px] uppercase">
            Network Capabilities
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Networking Skills
          </h2>

          <p className="text-slate-400 max-w-2xl mt-5">
            Technologies and networking concepts I am currently developing
            through Cisco labs, Packet Tracer projects, and hands-on practice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-950 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"
            >
              <div className="flex items-center justify-between">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>

                <span className="text-xs text-slate-500 uppercase">
                  {skill.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mt-6">
                {skill.name}
              </h3>

              <p className="text-sm text-green-400 mt-2">
                ● {skill.level}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;