import { Link } from "react-router-dom";
const labs = [
  {
    name: "VLAN & Trunking",
    category: "Switching",
    status: "Completed",
    description:
      "Configured VLAN 10 HR, VLAN 20 IT, and VLAN 30 SALES with 802.1Q trunking.",
    technologies: ["VLANs", "802.1Q", "Trunking"],
  },
  {
    name: "Inter-VLAN Routing",
    category: "Routing",
    status: "Completed",
    description:
      "Configured router-on-a-stick using router subinterfaces for communication between VLANs.",
    technologies: ["Cisco IOS", "Subinterfaces", "Routing"],
  },
  {
    name: "Extended ACL Security",
    category: "Security",
    status: "Completed",
    description:
      "Implemented an extended ACL to control traffic between departmental networks.",
    technologies: ["ACL", "IPv4", "Traffic Filtering"],
  },
  {
    name: "DHCP Network",
    category: "Services",
    status: "Completed",
    description:
      "Configured DHCP addressing so network hosts can automatically obtain IP configuration.",
    technologies: ["DHCP", "IPv4", "Default Gateway"],
  },
  {
    name: "IPv4 Subnetting",
    category: "Addressing",
    status: "Completed",
    description:
      "Designed subnets using CIDR, subnet masks, block sizes, network addresses, and broadcast addresses.",
    technologies: ["IPv4", "CIDR", "Subnetting"],
  },
  {
    name: "IPv6 Addressing",
    category: "Addressing",
    status: "In Progress",
    description:
      "Practicing IPv6 addressing, /64 prefixes, interface addresses, and IPv6 configuration.",
    technologies: ["IPv6", "/64", "Cisco IOS"],
  },
];

function Labs() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}

        <div className="mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-[4px] uppercase">
            Network Operations
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Packet Tracer Labs
          </h2>

          <p className="text-slate-400 max-w-3xl mt-5">
            Practical networking labs built while developing my Cisco
            networking skills and troubleshooting experience.
          </p>
        </div>

        {/* Labs */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab) => (
            <div
              key={lab.name}
              className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
            >
              {/* Status */}

              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-slate-500">
                  {lab.category}
                </span>

                <span
                  className={`text-xs font-semibold ${
                    lab.status === "Completed"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  ● {lab.status}
                </span>
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold mt-6 group-hover:text-blue-400 transition">
                {lab.name}
              </h3>

              {/* Description */}

              <p className="text-slate-400 mt-4 leading-7">
                {lab.description}
              </p>

              {/* Technologies */}

              <div className="flex flex-wrap gap-2 mt-6">
                {lab.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Action */}

              <Link
  to={
    lab.name === "VLAN & Trunking"
      ? "/labs/vlan-routing"
      : "#"
  }
  className="mt-7 inline-block text-sm text-blue-400 hover:text-blue-300 font-semibold"
>
  View Lab →
</Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Labs;