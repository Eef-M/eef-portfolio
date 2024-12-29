import { Send } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, z: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.15, ease: "easeOut" },
        }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-eefAccent text-center">
          Let's Connect
        </h2>
        <p className="mt-4 text-md md:text-lg text-eefPrimary text-center max-w-2xl mx-auto">
          I'm always open to new opportunities and interesting projects
        </p>

        <form className="mt-12 max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <input
                type="text"
                id="name"
                className="block w-full rounded-md border-2 border-eefPrimary bg-transparent px-4 py-2 placeholder:text-eefSecondary"
                placeholder="Name"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                className="block w-full rounded-md border-2 border-eefPrimary bg-transparent px-4 py-2 placeholder:text-eefSecondary"
                placeholder="Email"
              />
            </div>

            <div>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-md border-2 border-eefPrimary bg-transparent px-4 py-2 placeholder:text-eefSecondary"
                placeholder="Message"
              />
            </div>

            <button
              type="submit"
              className="flex justify-center items-center rounded-md bg-eefPrimary text-white py-3 gap-2 font-medium hover:bg-eefAccent transition duration-300 ease-in-out"
            >
              <Send className="w-5 h-5" />
              Send
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
