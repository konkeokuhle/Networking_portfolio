import { useEffect, useState } from "react";

const commands = [
  "Router> enable",
  "Router# configure terminal",
  "Router(config)# interface GigabitEthernet0/0",
  "Router(config-if)# ip address 192.168.10.1 255.255.255.0",
  "Router(config-if)# no shutdown",
  "Router(config-if)# exit",
  "Router(config)# end",
  "Router# show ip interface brief",
];

function CiscoTerminal() {
  const [displayedText, setDisplayedText] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);

  useEffect(() => {
    const command = commands[commandIndex];
    let characterIndex = 0;

    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText(command.slice(0, characterIndex + 1));
      characterIndex++;

      if (characterIndex === command.length) {
        clearInterval(interval);

        setTimeout(() => {
          setCommandIndex((current) => (current + 1) % commands.length);
        }, 1500);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [commandIndex]);

  return (
    <div className="mt-16 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-2xl">
      {/* Terminal Header */}

      <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-900 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
        <span className="h-3 w-3 rounded-full bg-green-500"></span>

        <span className="ml-3 text-sm text-slate-400">
          KONKENET — CISCO ROUTER
        </span>
      </div>

      {/* Terminal */}

      <div className="min-h-[260px] p-6 font-mono text-sm text-green-400">
        <p>{displayedText}</p>
        <span className="animate-pulse">█</span>
      </div>
    </div>
  );
}

export default CiscoTerminal;