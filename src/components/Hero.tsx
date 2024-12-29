import { Github, Linkedin } from "lucide-react";
import avatar from "../assets/img/eef_avatar.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-48 md:pb-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-between items-center gap-4 text-center py-4">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full w-28 h-28 md:w-32 md:h-32 border-4 border-eefPrimary animate-fade-down"
          />
          <p className="mt-4 text-md md:text-xl text-black max-w-4xl mx-auto animate-flip-up text-center">
            Hello, I’m{" "}
            <span className="font-medium text-eefSecondary">Eef</span> a
            dedicated{" "}
            <span className="font-medium text-eefSecondary">
              Full-Stack Developer
            </span>{" "}
            with a passion for building seamless, efficient, and innovative web
            solutions. With expertise in both back-end and front-end
            development, I turn ideas into functional and impactful digital
            experiences.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="transform hover:scale-110 transition duration-300 ease-in-out">
              <a
                href="https://github.com/Eef-M"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-eefPrimary animate-fade-right"
              >
                GitHub
                <Github className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="transform hover:scale-110 transition duration-300 ease-in-out">
              <a
                href="https://www.linkedin.com/in/eef-mekelliano/"
                className="inline-flex items-center px-6 py-3 border border-eefPrimary text-base font-medium rounded-md text-eefPrimary animate-fade-left transition duration-300 ease-in-out"
              >
                LinkedIn
                <Linkedin className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
