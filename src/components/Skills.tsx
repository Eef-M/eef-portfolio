import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="mx-3 md:mx-12 mt-3 md:mt-6 py-8 md:py-16">
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-bold text-eefDark text-center">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-x-24 gap-y-8 mt-8">
          {skills.map(
            (skill, index) =>
              skill.name !== "SandTimer" && (
                <div key={index} className="flex flex-col items-center">
                  <skill.svg className="w-24 h-24" />
                  <span className="mt-3 text-center font-semibold text-xl text-eefDark">
                    {skill.name}
                  </span>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
