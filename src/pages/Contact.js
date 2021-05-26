import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="page">
      <section className="contact-page">
        <form action="" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-container">
            <h2>get in touch</h2>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Email"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="message"
              placeholder="Message"
            ></textarea>
          </div>

          <button className="btn form-btn" type="submit">
            submit here
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
