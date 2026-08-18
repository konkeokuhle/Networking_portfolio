const certifications = [
  {
    name: "Networking Basics",
    provider: "Cisco Networking Academy",
    category: "Networking",
    status: "Completed",
    description:
      "Introduced fundamental networking concepts, network devices, communication protocols, and basic troubleshooting.",
    skills: [
      "Networking Fundamentals",
      "Network Devices",
      "Protocols",
    ],
  },

  {
    name: "Network Addressing and Basic Troubleshooting",
    provider: "Cisco Networking Academy",
    category: "Networking",
    status: "Completed",
    description:
      "Developed practical knowledge of IP addressing, subnetting, connectivity testing, and basic network troubleshooting.",
    skills: [
      "IPv4 Addressing",
      "Subnetting",
      "Troubleshooting",
    ],
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}

        <div className="mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-[4px] uppercase">
            Certifications & Credentials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Cisco Credentials
          </h2>

          <p className="text-slate-400 max-w-3xl mt-5 leading-7">
            Industry credentials supporting my development in networking,
            network addressing, and troubleshooting.
          </p>
        </div>

        {/* Credential Stats */}

        <div className="grid md:grid-cols-3 gap-5 mb-10">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-slate-500 text-xs uppercase tracking-widest">
              Cisco Credentials
            </p>

            <p className="text-4xl font-bold text-blue-400 mt-3">
              2
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-slate-500 text-xs uppercase tracking-widest">
              Provider
            </p>

            <p className="text-xl font-bold mt-3">
              Cisco Networking Academy
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-slate-500 text-xs uppercase tracking-widest">
              Focus
            </p>

            <p className="text-xl font-bold mt-3">
              Networking
            </p>
          </div>

        </div>

        {/* Certification Cards */}

        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((certification) => (
            <div
              key={certification.name}
              className="bg-slate-900 border border-slate-800 rounded-xl p-7 hover:border-blue-500 transition"
            >

              {/* Provider + Status */}

              <div className="flex items-center justify-between gap-4">

                <span className="text-xs uppercase tracking-wider text-blue-400">
                  {certification.provider}
                </span>

                <span className="text-xs font-semibold text-green-400">
                  ● {certification.status}
                </span>

              </div>

              {/* Certification Name */}

              <h3 className="text-2xl font-bold mt-6">
                {certification.name}
              </h3>

              {/* Category */}

              <p className="text-slate-500 text-sm mt-2">
                {certification.category}
              </p>

              {/* Description */}

              <p className="text-slate-400 mt-5 leading-7">
                {certification.description}
              </p>

              {/* Skills */}

              <div className="flex flex-wrap gap-2 mt-6">

                {certification.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {/* Credential Button */}

              <button
                type="button"
                className="mt-7 text-sm text-blue-400 font-semibold hover:text-blue-300 transition"
              >
                Credential Details →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;