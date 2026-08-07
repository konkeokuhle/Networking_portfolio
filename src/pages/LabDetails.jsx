function LabDetails() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="border-b border-slate-800 pb-10">
          <p className="text-blue-400 text-sm font-semibold tracking-[4px] uppercase">
            Network Lab
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            VLAN & Inter-VLAN Routing
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mt-6">
            A Cisco Packet Tracer lab demonstrating VLAN segmentation,
            802.1Q trunking, router-on-a-stick, DHCP, and communication
            between departmental networks.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
              ● Completed
            </span>

            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm">
              Cisco Packet Tracer
            </span>

            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm">
              VLAN
            </span>

            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm">
              Routing
            </span>
          </div>
        </div>

        {/* Objective */}

        <section className="mt-12">
          <p className="text-blue-400 text-sm uppercase tracking-widest">
            01 / Objective
          </p>

          <h2 className="text-3xl font-bold mt-3">
            Network Segmentation
          </h2>

          <p className="text-slate-400 mt-5 leading-8 max-w-4xl">
            The objective of this lab was to separate departments into
            different VLANs while allowing controlled communication between
            them through a Cisco router.
          </p>
        </section>

        {/* Network Design */}

        <section className="mt-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest">
            02 / Network Design
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-6">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-sm">VLAN 10</p>
              <h3 className="text-xl font-bold mt-2">HR</h3>
              <p className="text-slate-400 mt-3">
                192.168.10.0/24
              </p>
              <p className="text-blue-400 mt-2">
                Gateway: 192.168.10.1
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-sm">VLAN 20</p>
              <h3 className="text-xl font-bold mt-2">IT</h3>
              <p className="text-slate-400 mt-3">
                192.168.20.0/24
              </p>
              <p className="text-blue-400 mt-2">
                Gateway: 192.168.20.1
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-sm">VLAN 30</p>
              <h3 className="text-xl font-bold mt-2">SALES</h3>
              <p className="text-slate-400 mt-3">
                192.168.30.0/24
              </p>
              <p className="text-blue-400 mt-2">
                Gateway: 192.168.30.1
              </p>
            </div>

          </div>
        </section>

        {/* Technologies */}

        <section className="mt-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest">
            03 / Technologies
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

            {[
              "Cisco IOS",
              "VLANs",
              "802.1Q Trunking",
              "Router-on-a-Stick",
              "DHCP",
              "IPv4",
              "Packet Tracer",
              "Inter-VLAN Routing",
            ].map((technology) => (
              <div
                key={technology}
                className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-slate-300"
              >
                <span className="text-green-400">✓</span>{" "}
                {technology}
              </div>
            ))}

          </div>
        </section>

        {/* Configuration */}

        <section className="mt-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest">
            04 / Configuration
          </p>

          <h2 className="text-3xl font-bold mt-3">
            Router Subinterfaces
          </h2>

          <div className="bg-black border border-slate-800 rounded-xl mt-6 p-6 overflow-x-auto">
            <pre className="text-green-400 font-mono text-sm leading-7">
{`Router(config)# interface GigabitEthernet0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0

Router(config)# interface GigabitEthernet0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0

Router(config)# interface GigabitEthernet0/0.30
Router(config-subif)# encapsulation dot1Q 30
Router(config-subif)# ip address 192.168.30.1 255.255.255.0`}
            </pre>
          </div>
        </section>

        {/* Results */}

        <section className="mt-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest">
            05 / Results
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-6">

            <div className="bg-slate-900 border border-green-500/30 rounded-xl p-6">
              <p className="text-green-400 text-sm">
                STATUS
              </p>
              <h3 className="text-2xl font-bold mt-2">
                Operational
              </h3>
            </div>

            <div className="bg-slate-900 border border-green-500/30 rounded-xl p-6">
              <p className="text-green-400 text-sm">
                VLANs
              </p>
              <h3 className="text-2xl font-bold mt-2">
                3 Active
              </h3>
            </div>

            <div className="bg-slate-900 border border-green-500/30 rounded-xl p-6">
              <p className="text-green-400 text-sm">
                ROUTING
              </p>
              <h3 className="text-2xl font-bold mt-2">
                Operational
              </h3>
            </div>

          </div>
        </section>

        {/* Lessons */}

        <section className="mt-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest">
            06 / Lessons Learned
          </p>

          <div className="mt-6 space-y-4 text-slate-300">

            <p>
              ✓ VLANs provide logical network segmentation within the switch.
            </p>

            <p>
              ✓ Trunk links carry traffic from multiple VLANs between network
              devices.
            </p>

            <p>
              ✓ Router subinterfaces allow a single physical router interface
              to provide gateways for multiple VLANs.
            </p>

            <p>
              ✓ DHCP can automatically provide hosts with their network
              configuration.
            </p>

          </div>
        </section>

      </div>
    </main>
  );
}

export default LabDetails;