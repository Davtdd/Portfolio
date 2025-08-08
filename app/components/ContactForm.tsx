"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    const captchaValue = captchaRef.current?.getValue();
    if (!captchaValue) {
      setErrorMsg("Veuillez valider le CAPTCHA avant d'envoyer le message.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_7prf5ac",
        "template_zedmplo",
        formRef.current!,
        "L5b0QxZS_JrfcZjwh"
      );

      setSuccessMsg("Message envoyé avec succès !");
      formRef.current?.reset();
      captchaRef.current?.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMsg(
        "Une erreur est survenue lors de l'envoi du message. Merci de réessayer plus tard."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="space-y-6 text-gray-300"
      noValidate
    >
      <div>
        <label htmlFor="name" className="block mb-1 font-semibold">
          Nom complet
        </label>
        <input
          id="name"
          name="from_name"
          type="text"
          placeholder="Votre nom"
          required
          className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-semibold">
          Adresse email
        </label>
        <input
          id="email"
          name="from_email"
          type="email"
          placeholder="email@exemple.com"
          required
          className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block mb-1 font-semibold">
          Sujet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Objet de votre message"
          required
          className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message..."
          rows={5}
          required
          className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* reCAPTCHA */}
      <div>
        <ReCAPTCHA
          sitekey="6LfEq54rAAAAAHc_akQgMK_5_wJPf37mV8KL2NBI" //reCAPTCHA v2
          ref={captchaRef}
        />
      </div>

      {/* Messages de feedback */}
      {successMsg && (
        <p className="text-green-400 font-semibold">{successMsg}</p>
      )}
      {errorMsg && <p className="text-red-500 font-semibold">{errorMsg}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-md transition-colors ${
          loading ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Envoi..." : "Envoyer le message"}
      </button>
    </form>
  );
};

export default ContactForm;
