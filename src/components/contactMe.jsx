import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
function ContactMe() {
  const form = useRef();
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_g2fq19e",
      "template_tesbspu",
      form.current,
      "CjpNp9zFaM61Xptsq"
    );
    setUser_name("");
    setUser_email("");
    setMessage("");
    setBanner(true);
    setInterval(() => {
      setBanner(false);
    }, 4000);
  };

  return (
    <div
      id="contactMe"
      className="h-[90vh] border-t border-gray-500 flex items-center flex-col relative mx-5"
    >
      {banner ? (
        <motion.div
          exit={{ opacity: 0, y: -100 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ duration: 1 }}
          className="bg-slate-600 text-red-300 text-center p-2 fixed top-10 right-4 rounded-xl border w-64 h-16"
        >
          Your message was sent Thank You
        </motion.div>
      ) : null}
      <motion.div
        initial={{ y: -70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="text-4xl mt-36"
      >
        Intrested? Contact Me
      </motion.div>
      <div>
        <form
          className="grid grid-cols-4 gap-5 mt-16"
          onSubmit={sendEmail}
          ref={form}
        >
          <motion.input
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="border-2 rounded-xl hover:border-gray-500  col-span-1 h-12"
            type="text"
            name="user_name"
            value={user_name}
            placeholder=" Name"
            onChange={(text) => {
              setUser_name(text.user_name);
            }}
          ></motion.input>
          <motion.input
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="border-2 rounded-xl hover:border-gray-500 col-span-3"
            required
            type="text"
            name="user_email"
            value={user_email}
            placeholder=" Email"
            onChange={(text) => {
              setUser_email(text.user_email);
            }}
          ></motion.input>

          <motion.textarea
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            rows={3}
            className="place-content-center border-2 rounded-xl hover:border-gray-500 col-span-4 h-20"
            type="textarea"
            name="message"
            value={message}
            placeholder=" Message(Optinaol)"
            onChange={(text) => {
              setMessage(text.message);
            }}
          ></motion.textarea>
          <motion.input
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="border-2  rounded-xl bg-purple-300 col-span-full cursor-pointer h-12"
            type="submit"
          ></motion.input>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
