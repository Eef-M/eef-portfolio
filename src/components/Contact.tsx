import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    to_name: "Eef Mekelliano",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi input
    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast.error("Please fill in all the fields.", { position: "top-right" });
      return;
    }

    setIsLoading(true);

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      () => {
        toast.success("Message sent successfully! 🎉", {
          position: "top-right",
        });
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
          to_name: "Eef Mekelliano",
        });
        setIsLoading(false);
      },
      (error) => {
        console.error("Error:", error);
        toast.error("Failed to send message. Please try again. 😞", {
          position: "top-right",
        });
        setIsLoading(false);
      }
    );
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-12">
      <ToastContainer />
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

        <form className="mt-12 max-w-xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="block w-full rounded-md border-2 border-eefPrimary bg-transparent px-4 py-2 placeholder:text-eefSecondary"
                placeholder="Name"
              />
            </div>

            <div>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                className="block w-full rounded-md border-2 border-eefPrimary bg-transparent px-4 py-2 placeholder:text-eefSecondary"
                placeholder="Email"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-2 border-eefPrimary bg-transparent px-4 py-2 placeholder:text-eefSecondary"
                placeholder="Message"
              />
            </div>

            {/* <button
              type="submit"
              className="flex justify-center items-center rounded-md bg-eefPrimary text-white py-3 gap-2 font-medium hover:bg-eefAccent transition duration-300 ease-in-out"
            >
              <Send className="w-5 h-5" />
              Send
            </button> */}

            <button
              type="submit"
              className={`flex justify-center items-center rounded-md py-3 gap-2 font-medium transition duration-300 ease-in-out ${
                isLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-eefPrimary text-white hover:bg-eefAccent"
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5" /> Send
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
