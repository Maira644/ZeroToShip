function SkillBadge({ skill }) {
  return (
    <span className="bg-slate-700/60 border border-slate-600 text-slate-200 text-sm font-medium px-3 py-1 rounded-full transition-colors duration-200 hover:bg-slate-600 hover:border-slate-500">
      {skill}
    </span>
  );
}

export default SkillBadge;