import { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  // useRef to capture form DOM element
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rf24g8i", // replace with your EmailJS service ID
        "template_iou92f9", // replace with your EmailJS template ID
        form.current,
        "JwZhmNbMcJENydf8I" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Thank you for reaching out! Your message has been sent.");
          form.current.reset(); // clears the form
        },
        (error) => {
          console.log(error.text);
          alert("❌ Oops! Something went wrong, please try again.");
        }
      );
  };

  return (
    <section className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        I’d love to hear from you! Whether it’s a project, a job opportunity, or
        just a chat — drop me a message
      </p>

      {/* Attach ref + onSubmit */}
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
