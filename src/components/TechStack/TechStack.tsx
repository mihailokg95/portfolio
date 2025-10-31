import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { technologies, type TechItem } from "../../data/technologies";
import { projects } from "../../data/projects";

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...Object.keys(technologies)];

  const filteredTechs = selectedCategory === "All"
    ? Object.values(technologies).flat()
    : technologies[selectedCategory] || [];

  const START_YEAR = 2017;
  const currentYear = new Date().getFullYear();
  const yearsExperience = Math.max(1, currentYear - START_YEAR);
  const projectsCompleted = projects.length + 10;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.section
      id="tech-stack"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
      <SectionHeader
          tagText="Tech Stack"
          tagIcon="mdi:tools"
          heading="Technologies & Tools"
          description="Modern technologies I work with daily to build scalable applications"
          centered
        />

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech Grid */}
            <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filteredTechs.map((tech, index) => (
            <TechCard key={`${tech.name}-${index}`} tech={tech} index={index} />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <StatCard number={Object.values(technologies).flat().length} label="Technologies" />
          <StatCard number={Object.keys(technologies).length} label="Categories" />
          <StatCard number={`${yearsExperience}+`} label="Years Experience" />
          <StatCard number={`${projectsCompleted}+`} label="Projects Completed" />
        </motion.div>
        </div>
    </motion.section>
  );
}

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "from-emerald-500 to-teal-500";
      case "Intermediate": return "from-blue-500 to-indigo-500";
      case "Beginner": return "from-amber-500 to-orange-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.02,
        ease: "easeOut" as const
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative"
    >
      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/20">
        {/* Level Indicator */}
        <div className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r ${getLevelColor(tech.level)}`} />
        
        {/* Icon */}
            <div className="flex justify-center mb-3">
                  <Icon
                    icon={tech.icon}
            className="transition-transform duration-300 group-hover:scale-110"
            width={40}
            height={40}
          />
        </div>

        {/* Name */}
        <h3 className="text-center text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
          {tech.name}
        </h3>
      </div>
    </motion.div>
  );
}

function StatCard({ number, label }: { number: number | string; label: string }) {
  return (
    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center">
      <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}
