import { Github, Linkedin } from "lucide-react";
import avatar from "../assets/img/eef_avatar.jpg";

const Hero = () => {
  return (
    <section className="mx-3 md:mx-12 mt-3 md:mt-10 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-between items-center gap-4 text-center py-4">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full w-28 h-28 md:w-32 md:h-32 border-4 border-eefSecondary animate-fade-down"
          />
          <p className="text-md md:text-xl text-eefDark max-w-4xl mx-auto animate-flip-up">
            Hello, I’m <span className="font-medium text-eefPrimary">Eef</span>{" "}
            a dedicated{" "}
            <span className="font-medium text-eefPrimary">
              Full-Stack Developer
            </span>{" "}
            with a passion for building seamless, efficient, and innovative web
            solutions. With expertise in both back-end and front-end
            development, I turn ideas into functional and impactful digital
            experiences.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://github.com/Eef-M"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-eefLight bg-eefPrimary hover:bg-eefDark animate-fade-right"
            >
              GitHub
              <Github className="ml-2 w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/eef-mekelliano/"
              className="inline-flex items-center px-6 py-3 border border-eefDark text-base font-medium rounded-md text-eefDark bg-eefLight hover:bg-eefSecondary animate-fade-left"
            >
              LinkedIn
              <Linkedin className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
