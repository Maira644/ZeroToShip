import SkillBadge from "./SkillBadge";

function ApplicantCard({ applicant }) {
  return (
    <div
      className="
        bg-slate-800
        border
        border-slate-700/60
        rounded-2xl
        p-6
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      {/* Applicant Name */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-xl font-semibold text-white">
            {applicant.name}
          </h2>

          <p className="text-slate-400 text-sm">
            {applicant.university}
          </p>
        </div>

        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
          {applicant.status}
        </span>
      </div>

      {/* Project */}
      <div className="mb-5">
        <p className="text-slate-500 text-sm mb-1">
          Applied For
        </p>

        <p className="text-white font-medium">
          {applicant.project}
        </p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {applicant.skills.map((skill) => (
          <SkillBadge
            key={skill}
            skill={skill}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">

        <button
          className="
            flex-1
            border
            border-emerald-500
            bg-transparent
            text-emerald-400
            py-2.5
            rounded-xl
            font-medium
            transition-all
            duration-300
            hover:bg-emerald-500
            hover:text-white
            hover:shadow-lg
          "
        >
          Accept
        </button>

        <button
          className="
            flex-1
            border
            border-red-500
            bg-transparent
            text-red-400
            py-2.5
            rounded-xl
            font-medium
            transition-all
            duration-300
            hover:bg-red-500
            hover:text-white
            hover:shadow-lg
           "
        >
           Reject
        </button>

      </div>
    </div>
  );
}

export default ApplicantCard;