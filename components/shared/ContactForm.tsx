/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import { ToastContainer, toast } from "react-toastify";

import { ChangeEvent, FormEvent, useState } from "react";

const ContactForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ ...formData }),
      });
      setFormData(initialFormData);
      const { data } = await response.json();
      if (data) toast.success(`Email ${data.id} was successfully sent!`);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
   <section id="contact" className="px-5 py-12 sm:px-10">
     <div
      className="border-2 border-neutral-400 py-6"
    >
      <div className="mx-auto max-w-lg p-4">
        <h1 className="heading text-gray_gradient">Get In Touch</h1>
        <p className="my-5 text-center text-neutral-400 md:mt-10">
          Thank you for visiting! Whether you have a question, comment, or
          simply want to say hello, I encourage you to reach out.{" "}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full flex-col gap-7"
        >
          <label className=" font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input no-focus border-none outline-none"
              required
              placeholder="your name..."
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" className=" font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input no-focus border-none outline-none"
              required
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="font-semibold">
            Your Message
            <textarea
              name="message"
              rows={8}
              className="textarea no-focus  border-none outline-none"
              required
              placeholder="Let me know how i can help you"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className=" btn w-full " disabled={isLoading}>
            <span className="relative flex size-3">
              <span className="btn-ping"></span>
              <span className="btn-ping_dot"></span>
            </span>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
   </section>
  );
};

export default ContactForm;
