import { FiUser, FiChevronRight } from "react-icons/fi";
import SkillBadge from "./SkillBadge";

function ProjectCard({ project }) {
  return (
    <div
      className="
        w-full
        max-w-[360px]
        bg-slate-800
        border border-slate-700/60
        rounded-2xl
        p-5
        flex
        flex-col
        shadow-lg
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      <h2 className="text-xl font-semibold text-white leading-snug">
        {project.title}
      </h2>

      <p className="text-sm text-slate-400 mt-2 flex items-center gap-1.5">
        <FiUser size={14} className="text-purple-400" />
        Created by{" "}
        <span className="text-slate-200 font-medium">{project.creator}</span>
      </p>

      <p className="text-slate-400 text-[15px] leading-6 mt-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-auto pt-6">
        <span className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          {project.status}
        </span>

        <button
          className="
            flex items-center gap-1
            bg-emerald-600
            hover:bg-emerald-500
            hover:scale-105
            transition-all
            duration-200
            text-white
            font-medium
            px-5
            py-2
            rounded-lg
          "
        >
          Apply <FiChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;