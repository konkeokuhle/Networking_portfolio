function IPv6AddressingDetails() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="border-b border-slate-800 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-blue-400 text-sm font-semibold tracking-[4px] uppercase">
              Network Addressing Lab
            </span>

            <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">
              ● IN PROGRESS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            IPv6 Addressing
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mt-6 leading-8">
            A practical networking lab focused on IPv6 addressing,
            prefix lengths, interface configuration, Neighbor Discovery,
            and IPv6 connectivity testing using Cisco IOS.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              IPv6
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              /64 Prefix
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              Cisco IOS
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              Neighbor Discovery
            </span>
          </div>
        </header>

        {/* Overview */}
        <section className="mt-12">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">01</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Lab Overview
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-6">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Address Family
              </p>

              <p className="text-xl font-semibold mt-3">
                IPv6
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Prefix
              </p>

              <p className="text-xl font-semibold mt-3 font-mono">
                /64
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Platform
              </p>

              <p className="text-xl font-semibold mt-3">
                Cisco IOS
              </p>
            </div>

          </div>
        </section>

        {/* Objective */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">02</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Objective
            </h2>
          </div>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-7">
            <p className="text-slate-300 leading-8">
              The objective of this lab is to configure IPv6 addresses on
              network interfaces, understand IPv6 prefixes and interface
              identifiers, and verify IPv6 connectivity between devices.
            </p>
          </div>
        </section>

        {/* IPv6 Structure */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">03</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              IPv6 Address Structure
            </h2>
          </div>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-7">

            <div className="bg-black border border-slate-800 rounded-lg p-6 overflow-x-auto">
              <p className="font-mono text-lg md:text-2xl text-blue-400 whitespace-nowrap">
                2001:db8:acad:1::1/64
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-6">

              <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                <p className="text-blue-400 text-sm uppercase tracking-widest">
                  Network Prefix
                </p>

                <p className="font-mono text-green-400 text-lg mt-3">
                  2001:db8:acad:1::/64
                </p>

                <p className="text-slate-400 text-sm mt-3 leading-6">
                  Identifies the IPv6 subnet.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                <p className="text-blue-400 text-sm uppercase tracking-widest">
                  Interface ID
                </p>

                <p className="font-mono text-green-400 text-lg mt-3">
                  ::1
                </p>

                <p className="text-slate-400 text-sm mt-3 leading-6">
                  Identifies an interface within the subnet.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">04</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Cisco IOS Configuration
            </h2>
          </div>

          <div className="mt-6 bg-black border border-slate-800 rounded-xl p-6 overflow-x-auto">
            <pre className="text-green-400 font-mono text-sm leading-8">
{`R1(config)# ipv6 unicast-routing

R1(config)# interface GigabitEthernet0/0/0

R1(config-if)# ipv6 address 2001:db8:acad:1::1/64

R1(config-if)# no shutdown

R1(config-if)# exit`}
            </pre>
          </div>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-slate-300 leading-7">
              IPv6 routing must be enabled on the router before the device
              can route IPv6 packets between networks.
            </p>
          </div>
        </section>

        {/* Verification */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">05</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Verification
            </h2>
          </div>

          <div className="mt-6 bg-black border border-slate-800 rounded-xl p-6 overflow-x-auto">
            <pre className="text-green-400 font-mono text-sm leading-8">
{`R1# show ipv6 interface brief

R1# show ipv6 interface GigabitEthernet0/0/0

R1# show ipv6 route

R1# ping 2001:db8:acad:1::1`}
            </pre>
          </div>
        </section>

        {/* Neighbor Discovery */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">06</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Neighbor Discovery
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-6">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-blue-400 font-mono">
                NS
              </p>

              <h3 className="font-bold text-lg mt-4">
                Neighbor Solicitation
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Used by IPv6 devices to discover and resolve information
                about neighboring devices.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-blue-400 font-mono">
                NA
              </p>

              <h3 className="font-bold text-lg mt-4">
                Neighbor Advertisement
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Provides information about a device in response to
                Neighbor Discovery operations.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-blue-400 font-mono">
                RA
              </p>

              <h3 className="font-bold text-lg mt-4">
                Router Advertisement
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Provides IPv6 hosts with information about available
                network prefixes and router information.
              </p>
            </div>

          </div>
        </section>

        {/* Testing */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">07</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Connectivity Testing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-6">

            <div className="bg-slate-900 border border-green-500/30 rounded-xl p-6">
              <p className="text-green-400 text-sm uppercase">
                Expected
              </p>

              <h3 className="text-xl font-bold mt-3">
                IPv6 Ping
              </h3>

              <p className="font-mono text-green-400 mt-4">
                Reply from IPv6 address
              </p>

              <p className="text-slate-400 mt-3">
                Successful replies confirm IPv6 connectivity between
                the tested devices.
              </p>
            </div>

            <div className="bg-slate-900 border border-yellow-500/30 rounded-xl p-6">
              <p className="text-yellow-400 text-sm uppercase">
                Troubleshooting
              </p>

              <h3 className="text-xl font-bold mt-3">
                No Connectivity
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Check the IPv6 address, prefix length, interface status,
                IPv6 routing, and Neighbor Discovery information.
              </p>
            </div>

          </div>
        </section>

        {/* Lessons */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">08</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Lessons Learned
            </h2>
          </div>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-7 space-y-4">

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              IPv6 uses 128-bit addresses represented in hexadecimal.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              A /64 prefix is commonly used for IPv6 LAN subnets.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              IPv6 devices use Neighbor Discovery instead of ARP.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              IPv6 connectivity can be verified using Cisco IOS show
              commands and ping testing.
            </p>

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between gap-4">

            <div>
              <p className="font-semibold">
                IPv6 Addressing Lab
              </p>

              <p className="text-slate-500 text-sm mt-1">
                Cisco NOC Portfolio
              </p>
            </div>

            <p className="text-slate-500 text-sm">
              Built with React + Tailwind CSS
            </p>
          </div>
        </footer>

      </div>
    </main>
  );
}

export default IPv6AddressingDetails;