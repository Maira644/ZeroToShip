import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import { FiFolder, FiUsers, FiCode } from "react-icons/fi";

function Sparkle({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c.6 5.8 1.2 6.4 7 7-5.8.6-6.4 1.2-7 7-.6-5.8-1.2-6.4-7-7 5.8-.6 6.4-1.2 7-7z" />
    </svg>
  );
}

const stats = [
  {
    icon: FiFolder,
    value: projects.length,
    label: "Available Projects",
    color: "emerald",
  },
  {
    icon: FiUsers,
    value: 3,
    label: "Active Creators",
    color: "purple",
  },
  {
    icon: FiCode,
    value: "8+",
    label: "Skills Required",
    color: "sky",
  },
];

const chipColors = {
  emerald: "bg-emerald-500/10 text-emerald-400",
  purple: "bg-purple-500/10 text-purple-400",
  sky: "bg-sky-500/10 text-sky-400",
};

function Marketplace() {
  return (
    <div className="min-h-screen bg-[#0f1c33]">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 relative">

        {/* Heading */}
        <div className="mb-12">
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Discover Student Projects
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            Find exciting projects, collaborate with talented students,
            and build real-world software together.
          </p>
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap gap-5 mb-14">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-slate-800/60 border border-slate-700/60 rounded-2xl px-6 py-5 min-w-[170px]"
            >
              <div className={`p-2.5 rounded-lg ${chipColors[color]}`}>
                <Icon size={20} />
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  {value}
                </p>

                <p className="text-slate-400 text-sm mt-1">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mt-16">
          <Sparkle className="w-3.5 h-3.5 text-emerald-400" />
          Collaborate. Learn. Build. Ship.
        </div>

        <Sparkle className="w-6 h-6 text-purple-400 absolute bottom-4 right-4" />

      </div>
    </div>
  );
}

export default Marketplace;