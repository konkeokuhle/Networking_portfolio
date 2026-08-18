function IPv4SubnettingDetails() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="border-b border-slate-800 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-blue-400 text-sm font-semibold tracking-[4px] uppercase">
              Network Addressing Lab
            </span>

            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
              ● COMPLETED
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            IPv4 Subnetting
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mt-6 leading-8">
            A practical networking lab focused on designing IPv4 subnets,
            calculating subnet masks, identifying network and broadcast
            addresses, and determining usable host ranges.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              IPv4
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              CIDR
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              Subnetting
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              Address Planning
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
                IPv4
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Method
              </p>

              <p className="text-xl font-semibold mt-3">
                CIDR
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Focus
              </p>

              <p className="text-xl font-semibold mt-3">
                Address Planning
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
              The objective of this lab was to divide an IPv4 network into
              smaller logical networks while efficiently allocating addresses
              to different departments or network segments.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mt-7">

              <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                <p className="text-blue-400 text-sm">
                  Network Address
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  Identifies the subnet
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                <p className="text-blue-400 text-sm">
                  Host Range
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  Usable device addresses
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                <p className="text-blue-400 text-sm">
                  Broadcast
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  Last address in the subnet
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Core Concepts */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">03</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Subnetting Concepts
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-6">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <span className="text-blue-400 font-mono">
                CIDR
              </span>

              <h3 className="font-bold text-lg mt-4">
                Prefix Length
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                CIDR notation represents how many bits of an IPv4 address
                identify the network.
              </p>

              <p className="font-mono text-green-400 mt-4">
                /24
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <span className="text-blue-400 font-mono">
                MASK
              </span>

              <h3 className="font-bold text-lg mt-4">
                Subnet Mask
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                The subnet mask separates the network portion from the
                host portion of an IPv4 address.
              </p>

              <p className="font-mono text-green-400 mt-4">
                255.255.255.0
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <span className="text-blue-400 font-mono">
                BLOCK
              </span>

              <h3 className="font-bold text-lg mt-4">
                Block Size
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Block size helps determine where each subnet begins and
                how the subnet addresses are divided.
              </p>

              <p className="font-mono text-green-400 mt-4">
                256 − mask value
              </p>
            </div>

          </div>
        </section>

        {/* Example Calculation */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">04</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Subnet Calculation
            </h2>
          </div>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

            <div className="px-6 py-4 border-b border-slate-800">
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Example Network
              </p>

              <p className="text-xl font-mono text-blue-400 mt-2">
                192.168.10.0/26
              </p>
            </div>

            <div className="p-6">

              <div className="bg-black border border-slate-800 rounded-lg p-6">
                <pre className="text-green-400 font-mono text-sm leading-8 overflow-x-auto">
{`Prefix length:     /26

Subnet mask:       255.255.255.192

Block size:        256 - 192 = 64

Usable hosts:      2^6 - 2 = 62`}
                </pre>
              </div>

            </div>
          </div>
        </section>

        {/* Address Table */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">05</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Subnet Address Table
            </h2>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800">

            <div className="min-w-[700px]">

              <div className="grid grid-cols-4 bg-slate-900 px-5 py-4 text-xs uppercase tracking-widest text-slate-500">
                <span>Subnet</span>
                <span>Network</span>
                <span>Usable Hosts</span>
                <span>Broadcast</span>
              </div>

              <div className="grid grid-cols-4 px-5 py-5 border-t border-slate-800 text-sm">
                <span>1</span>

                <span className="font-mono text-blue-400">
                  192.168.10.0
                </span>

                <span className="font-mono text-slate-300">
                  .1 – .62
                </span>

                <span className="font-mono text-slate-300">
                  192.168.10.63
                </span>
              </div>

              <div className="grid grid-cols-4 px-5 py-5 border-t border-slate-800 text-sm">
                <span>2</span>

                <span className="font-mono text-blue-400">
                  192.168.10.64
                </span>

                <span className="font-mono text-slate-300">
                  .65 – .126
                </span>

                <span className="font-mono text-slate-300">
                  192.168.10.127
                </span>
              </div>

              <div className="grid grid-cols-4 px-5 py-5 border-t border-slate-800 text-sm">
                <span>3</span>

                <span className="font-mono text-blue-400">
                  192.168.10.128
                </span>

                <span className="font-mono text-slate-300">
                  .129 – .190
                </span>

                <span className="font-mono text-slate-300">
                  192.168.10.191
                </span>
              </div>

              <div className="grid grid-cols-4 px-5 py-5 border-t border-slate-800 text-sm">
                <span>4</span>

                <span className="font-mono text-blue-400">
                  192.168.10.192
                </span>

                <span className="font-mono text-slate-300">
                  .193 – .254
                </span>

                <span className="font-mono text-slate-300">
                  192.168.10.255
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* Verification */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">06</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Verification
            </h2>
          </div>

          <div className="mt-6 bg-black border border-slate-800 rounded-xl p-6">
            <pre className="text-green-400 font-mono text-sm leading-8 overflow-x-auto">
{`Router# show ip interface brief

Router# show running-config

Router# show ip route

Router# ping 192.168.10.1`}
            </pre>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">07</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Troubleshooting
            </h2>
          </div>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-7 space-y-4">

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Verify that the subnet mask matches the intended prefix length.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Confirm that network addresses are aligned with the block size.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Ensure that the network and broadcast addresses are not
              assigned to hosts.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Verify that hosts are placed inside the correct subnet.
            </p>

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
              CIDR notation determines the size of the network and host
              portions of an IPv4 address.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Block size makes it easier to identify subnet boundaries.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Network and broadcast addresses cannot normally be assigned
              to end hosts.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Good subnet planning helps prevent address waste and
              overlapping networks.
            </p>

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between gap-4">

            <div>
              <p className="font-semibold">
                IPv4 Subnetting Lab
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

export default IPv4SubnettingDetails;