"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json();
        setError(data.error || "Ocurrió un error, intenta de nuevo.");
      }
    } catch {
      setError("No se pudo conectar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 overflow-hidden"
      style={{ background: "#F5F5DC" }}
    >
      {/* Separador dorado superior */}
      <div className="absolute top-0 inset-x-0 flex justify-center">
        <div className="w-full max-w-xs h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(214,175,87,0.45), transparent)" }} />
      </div>

      {/* Separador dorado inferior */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center">
        <div className="w-full max-w-xs h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(214,175,87,0.45), transparent)" }} />
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center flex flex-col gap-6 sm:gap-8">

        {/* Etiqueta */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[9px] sm:text-[10px] tracking-[0.45em] sm:tracking-[0.5em] uppercase"
          style={{ color: "rgba(214,175,87,0.7)", fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Mantente informado
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
          className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.2]"
          style={{ color: "#0A2A22", fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          ¿Quieres ser el primero<br />
          <em className="not-italic" style={{ color: "#D6AF57" }}>en saberlo?</em>
        </motion.h2>

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="flex flex-col sm:flex-row gap-3"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 py-4 px-6 text-center text-sm rounded-full"
              style={{
                border: "1px solid rgba(214,175,87,0.4)",
                color: "#D6AF57",
                fontFamily: "var(--font-poppins), sans-serif",
                background: "rgba(214,175,87,0.05)",
              }}
            >
              Perfecto — te avisaremos pronto.
            </motion.div>
          ) : (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                required
                className="flex-1 rounded-full px-5 sm:px-6 py-3 sm:py-4 text-sm outline-none transition-all duration-200 w-full"
                style={{
                  background: "rgba(10,42,34,0.06)",
                  border: "1px solid rgba(214,175,87,0.25)",
                  color: "#0A2A22",
                  fontFamily: "var(--font-poppins), sans-serif",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(214,175,87,0.6)";
                  e.target.style.background = "rgba(214,175,87,0.04)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(214,175,87,0.25)";
                  e.target.style.background = "rgba(10,42,34,0.06)";
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[11px] sm:text-[12px] tracking-[0.25em] uppercase font-medium transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
                style={{
                  background: "#0A2A22",
                  color: "#D6AF57",
                  fontFamily: "var(--font-poppins), sans-serif",
                  border: "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#D6AF57";
                  e.currentTarget.style.color = "#0A2A22";
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0A2A22";
                  e.currentTarget.style.color = "#D6AF57";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {loading ? "Enviando..." : "Notificarme"}
              </button>
            </>
          )}
        </motion.form>

        {/* Error */}
        {error && (
          <p className="text-[11px]" style={{ color: "#C0392B", fontFamily: "var(--font-poppins), sans-serif" }}>
            {error}
          </p>
        )}

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[10px] sm:text-[11px] px-2 sm:px-0"
          style={{ color: "rgba(10,42,34,0.35)", fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Cuando Don Otoniel llegue, serás de los primeros en saberlo.
        </motion.p>
      </div>
    </section>
  );
}
