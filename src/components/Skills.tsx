import { skills } from "../data/skills";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1, delay: 0.1, ease: "easeOut" },
        }}
        className="w-full mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-eefAccent text-center">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-x-24 gap-y-6 md:gap-x-24 md:gap-y-10 mt-8">
          {skills.map(
            (skill, index) =>
              skill.name !== "SandTimer" && (
                <div key={index} className="flex flex-col items-center">
                  <skill.svg className="w-16 h-16 md:w-24 md:h-24" />
                  <span className="mt-3 text-center font-semibold text-sm md:text-xl text-eefAccent">
                    {skill.name}
                  </span>
                </div>
              )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
