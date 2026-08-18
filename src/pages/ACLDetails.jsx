function ACLDetails() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="border-b border-slate-800 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-blue-400 text-sm font-semibold tracking-[4px] uppercase">
              Network Security Lab
            </span>

            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
              ● COMPLETED
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            ACL Network Security
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mt-6 leading-8">
            A Cisco Packet Tracer lab demonstrating how an extended IPv4
            access control list can control communication between
            departmental networks.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              Cisco IOS
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              IPv4 ACL
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              Network Security
            </span>

            <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm">
              Packet Tracer
            </span>
          </div>
        </header>

        {/* Lab Overview */}
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
                Technology
              </p>

              <p className="text-xl font-semibold mt-3">
                Cisco IOS
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Security
              </p>

              <p className="text-xl font-semibold mt-3">
                Extended ACL
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Environment
              </p>

              <p className="text-xl font-semibold mt-3">
                Packet Tracer
              </p>
            </div>

          </div>
        </section>

        {/* Objective */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">02</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Security Objective
            </h2>
          </div>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-7">
            <p className="text-slate-300 leading-8">
              The objective of this lab is to restrict communication between
              specific departmental networks while allowing other permitted
              IP traffic to continue through the router.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-7">

              <div className="border border-red-500/30 bg-red-500/5 rounded-lg p-5">
                <p className="text-red-400 text-xs font-semibold tracking-widest uppercase">
                  BLOCK
                </p>

                <p className="text-xl font-bold mt-2">
                  HR → IT
                </p>

                <p className="text-slate-400 mt-2 font-mono text-sm">
                  192.168.10.0/24 → 192.168.20.0/24
                </p>
              </div>

              <div className="border border-green-500/30 bg-green-500/5 rounded-lg p-5">
                <p className="text-green-400 text-xs font-semibold tracking-widest uppercase">
                  PERMIT
                </p>

                <p className="text-xl font-bold mt-2">
                  Other IP Traffic
                </p>

                <p className="text-slate-400 mt-2 font-mono text-sm">
                  any → any
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Topology */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">03</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Network Topology
            </h2>
          </div>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-8">

            <div className="grid md:grid-cols-3 gap-6 items-center">

              <div className="border border-slate-700 rounded-xl p-6 text-center">
                <div className="text-blue-400 text-3xl">
                  PC
                </div>

                <h3 className="font-bold mt-3">
                  HR VLAN
                </h3>

                <p className="text-slate-500 font-mono text-sm mt-2">
                  192.168.10.0/24
                </p>
              </div>

              <div className="text-center">
                <div className="text-slate-600 text-3xl hidden md:block">
                  →
                </div>

                <div className="border border-blue-500/40 bg-blue-500/5 rounded-xl p-6">
                  <p className="text-blue-400 font-mono text-sm">
                    ROUTER
                  </p>

                  <p className="font-bold mt-2">
                    ACL 101
                  </p>
                </div>

                <div className="text-slate-600 text-3xl hidden md:block mt-2">
                  →
                </div>
              </div>

              <div className="border border-slate-700 rounded-xl p-6 text-center">
                <div className="text-blue-400 text-3xl">
                  PC
                </div>

                <h3 className="font-bold mt-3">
                  IT VLAN
                </h3>

                <p className="text-slate-500 font-mono text-sm mt-2">
                  192.168.20.0/24
                </p>
              </div>

            </div>

            <div className="mt-8 border-t border-slate-800 pt-6">
              <p className="text-slate-500 text-sm">
                Traffic between the networks is inspected by the router's
                access control policy.
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
                R1 — ACL Configuration
              </span>

              <span className="text-green-400 text-xs">
                CONFIG
              </span>
            </div>

            <pre className="bg-black p-6 overflow-x-auto text-sm leading-7">
              <code className="text-green-400">
{`R1(config)# access-list 101 deny ip 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255

R1(config)# access-list 101 permit ip any any

R1(config)# interface GigabitEthernet0/0

R1(config-if)# ip access-group 101 in`}
              </code>
            </pre>

          </div>
        </section>

        {/* ACL Explanation */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">05</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              How the ACL Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-6">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <span className="text-blue-400 font-mono">
                01
              </span>

              <h3 className="font-bold text-lg mt-4">
                Packet arrives
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Traffic enters the router through the interface where
                the ACL has been applied.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <span className="text-blue-400 font-mono">
                02
              </span>

              <h3 className="font-bold text-lg mt-4">
                Rules evaluated
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Cisco evaluates ACL entries from top to bottom until
                a matching rule is found.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <span className="text-blue-400 font-mono">
                03
              </span>

              <h3 className="font-bold text-lg mt-4">
                Action applied
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Matching traffic is either permitted or denied according
                to the configured policy.
              </p>
            </div>

          </div>
        </section>

        {/* Testing */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">06</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Verification
            </h2>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden border border-slate-800">

            <div className="grid grid-cols-3 bg-slate-900 px-5 py-4 text-xs uppercase tracking-widest text-slate-500">
              <span>Test</span>
              <span>Expected</span>
              <span>Result</span>
            </div>

            <div className="grid grid-cols-3 px-5 py-5 border-t border-slate-800">
              <span className="font-mono text-sm">
                HR → IT
              </span>

              <span className="text-red-400">
                Block
              </span>

              <span className="text-green-400">
                ✓ Passed
              </span>
            </div>

            <div className="grid grid-cols-3 px-5 py-5 border-t border-slate-800">
              <span className="font-mono text-sm">
                Permitted traffic
              </span>

              <span className="text-green-400">
                Allow
              </span>

              <span className="text-green-400">
                ✓ Passed
              </span>
            </div>

          </div>
        </section>

        {/* Commands */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono">07</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Verification Commands
            </h2>
          </div>

          <div className="mt-6 bg-black border border-slate-800 rounded-xl p-6">
            <pre className="text-sm leading-8 text-green-400">
{`R1# show access-lists
R1# show ip interface
R1# show running-config
R1# ping 192.168.20.1`}
            </pre>
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
              Extended ACLs can filter traffic using source and destination
              IP addresses.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              ACL entries are processed sequentially from top to bottom.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              ACL placement determines which traffic is inspected.
            </p>

            <p className="text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              The implicit deny at the end of an ACL must be considered
              when designing a policy.
            </p>

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p className="font-semibold">
                ACL Network Security Lab
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

export default ACLDetails;