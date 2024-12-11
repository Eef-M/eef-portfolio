import avatar from "../assets/img/eef_avatar.jpg";

const Hero = () => {
  return (
    <section className="mx-3 md:mx-12 mt-3 md:mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-between items-center gap-4 text-center py-4">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full w-28 h-28 md:w-32 md:h-32"
          />
          <p className="text-md md:text-xl text-eefDark max-w-4xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
