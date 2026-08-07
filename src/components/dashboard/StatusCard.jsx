function StatusCard({ title, value, status }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-5">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>

        <span className="text-sm text-slate-400 uppercase tracking-wide">
          {status}
        </span>
      </div>

      <h3 className="text-slate-400 mt-4">
        {title}
      </h3>

      <p className="text-3xl font-bold text-white mt-2">
        {value}
      </p>
    </div>
  );
}

export default StatusCard;

