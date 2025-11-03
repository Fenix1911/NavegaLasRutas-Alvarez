import React, { useState } from "react";
import "../../styles/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Fake send — in a real app you'd call an API
    console.log("Contact form submitted", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <main className="contact-page">
      <h2>Contacto</h2>
      <p>Si tenés preguntas, enviános un mensaje. Respondemos en 24-48hs.</p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            Mensaje
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} required />
          </label>

          <button type="submit" className="btn">Enviar</button>
          {sent && <p className="sent">Mensaje enviado</p>}
        </form>

        <aside className="contact-info">
          <h3>Soporte</h3>
          <p>Email: soporte@navegarlasrutas.local</p>
          <p>Tel: +54 9 11 1234 5678</p>
          <p>Horario: Lun-Vie 9:00 - 18:00</p>
        </aside>
      </div>
    </main>
  );
};

export default Contact;
