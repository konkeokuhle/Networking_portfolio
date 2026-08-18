function DHCPDetails() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="border-b border-slate-800 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-blue-400 text-sm font-semibold tracking-[4px] uppercase">
              Network Services Lab
            </span>

            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
              ● COMPLETED
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            DHCP Network Configuration
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mt-6 leading-8">
            A Cisco Packet Tracer lab demonstrating how DHCP can
            automatically provide IP addressing information to network
            clients.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              Cisco IOS
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              DHCP
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              IPv4
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              Packet Tracer
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
                Service
              </p>

              <p className="text-xl font-semibold mt-3">
                DHCP
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Protocol
              </p>

              <p className="text-xl font-semibold mt-3">
                IPv4
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Environment
              </p>

              <p className="text-xl font-semibold mt-3">
                Cisco Packet Tracer
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
              The objective of this lab was to configure a Cisco router
              as a DHCP server so that network clients could automatically
              receive their IPv4 configuration.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-7">

              <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                <p className="text-blue-400 text-sm">
                  IP Address
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  Automatically assigned
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                <p className="text-blue-400 text-sm">
                  Subnet Mask
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  Automatically assigned
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                <p className="text-blue-400 text-sm">
                  Gateway
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  DHCP supplied
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                <p className="text-blue-400 text-sm">
                  DNS
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  DHCP supplied
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* DHCP Process */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">03</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              DHCP Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5 mt-6">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <span className="text-blue-400 font-mono">
                01
              </span>

              <h3 className="font-bold text-lg mt-4">
                Discover
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                The client broadcasts a DHCP Discover message looking
                for a DHCP server.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <span className="text-blue-400 font-mono">
                02
              </span>

              <h3 className="font-bold text-lg mt-4">
                Offer
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                The DHCP server offers an available IP configuration
                to the client.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <span className="text-blue-400 font-mono">
                03
              </span>

              <h3 className="font-bold text-lg mt-4">
                Request
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                The client requests the offered network configuration.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <span className="text-blue-400 font-mono">
                04
              </span>

              <h3 className="font-bold text-lg mt-4">
                Acknowledge
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                The server confirms the lease and provides the final
                network configuration.
              </p>
            </div>

          </div>
        </section>

        {/* Cisco Configuration */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">04</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Cisco IOS Configuration
            </h2>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden border border-slate-800">

            <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
              <span className="text-slate-400 text-sm font-mono">
                R1 — DHCP Configuration
              </span>

              <span className="text-green-400 text-xs">
                CONFIG
              </span>
            </div>

            <pre className="bg-black p-6 overflow-x-auto text-sm leading-7">
              <code className="text-green-400">
{`R1(config)# ip dhcp excluded-address 192.168.10.1 192.168.10.10

R1(config)# ip dhcp pool HR

R1(dhcp-config)# network 192.168.10.0 255.255.255.0

R1(dhcp-config)# default-router 192.168.10.1

R1(dhcp-config)# dns-server 8.8.8.8`}
              </code>
            </pre>

          </div>
        </section>

        {/* Addressing */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">05</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              DHCP Address Pool
            </h2>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">

            <div className="grid grid-cols-2 md:grid-cols-4 bg-slate-900 px-5 py-4 text-xs uppercase tracking-widest text-slate-500">
              <span>Parameter</span>
              <span>Value</span>
              <span>Purpose</span>
              <span>Status</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 px-5 py-5 border-t border-slate-800 text-sm">
              <span>Network</span>
              <span className="font-mono text-blue-400">
                192.168.10.0/24
              </span>
              <span className="text-slate-400">
                Client network
              </span>
              <span className="text-green-400">
                Active
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 px-5 py-5 border-t border-slate-800 text-sm">
              <span>Gateway</span>
              <span className="font-mono text-blue-400">
                192.168.10.1
              </span>
              <span className="text-slate-400">
                Default gateway
              </span>
              <span className="text-green-400">
                Active
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 px-5 py-5 border-t border-slate-800 text-sm">
              <span>Excluded</span>
              <span className="font-mono text-blue-400">
                .1 – .10
              </span>
              <span className="text-slate-400">
                Reserved addresses
              </span>
              <span className="text-green-400">
                Configured
              </span>
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
            <pre className="text-sm leading-8 text-green-400">
{`R1# show ip dhcp binding

R1# show ip dhcp pool

R1# show running-config

R1# show ip interface brief`}
            </pre>
          </div>
        </section>

        {/* Testing */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">07</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Client Testing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-6">

            <div className="bg-slate-900 border border-green-500/30 rounded-xl p-6">
              <p className="text-green-400 text-xs font-semibold tracking-widest">
                EXPECTED RESULT
              </p>

              <h3 className="text-xl font-bold mt-3">
                Client receives IPv4 configuration
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                The client should receive an IP address, subnet mask,
                default gateway, and DNS information from the DHCP server.
              </p>
            </div>

            <div className="bg-slate-900 border border-blue-500/30 rounded-xl p-6">
              <p className="text-blue-400 text-xs font-semibold tracking-widest">
                CONNECTIVITY TEST
              </p>

              <h3 className="text-xl font-bold mt-3">
                Ping the default gateway
              </h3>

              <p className="text-slate-400 mt-3 font-mono">
                ping 192.168.10.1
              </p>
            </div>

          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">08</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Troubleshooting Checklist
            </h2>
          </div>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-7 space-y-4">

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Verify that the router interface is up.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Confirm the DHCP pool network matches the client subnet.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Check excluded addresses.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Verify the client's network adapter is configured for DHCP.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Use Cisco show commands to inspect DHCP bindings and pools.
            </p>

          </div>
        </section>

        {/* Lessons */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">09</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Lessons Learned
            </h2>
          </div>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-7 space-y-4">

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              DHCP reduces the need to manually configure every client.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              Excluded addresses can be reserved for infrastructure devices.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              The DHCP pool defines the network configuration available
              to clients.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              DHCP verification commands are important when troubleshooting
              address assignment problems.
            </p>

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between gap-4">

            <div>
              <p className="font-semibold">
                DHCP Network Lab
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

export default DHCPDetails;