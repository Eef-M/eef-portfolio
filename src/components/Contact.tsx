import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="mx-3 md:mx-12 mt-3 md:mt-6 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-eefDark text-center">
          Let's Connect
        </h2>
        <p className="mt-4 text-xl text-eefPrimary text-center max-w-2xl mx-auto">
          I'm always open to new opportunities and interesting projects
        </p>

        <form className="mt-12 max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <input
                type="text"
                id="name"
                className="block w-full rounded-md border-2 border-eefDark bg-eefLight px-4 py-2 placeholder:text-eefPrimary"
                placeholder="Name"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                className="block w-full rounded-md border-2 border-eefDark bg-eefLight px-4 py-2 placeholder:text-eefPrimary"
                placeholder="Email"
              />
            </div>

            <div>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-md border-2 border-eefDark bg-eefLight px-4 py-2 placeholder:text-eefPrimary"
                placeholder="Message"
              />
            </div>

            <button
              type="submit"
              className="flex justify-center items-center rounded-md bg-eefPrimary text-eefLight py-3 gap-2 font-medium hover:bg-eefDark"
            >
              <Send className="w-5 h-5" />
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
