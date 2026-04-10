"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Expectation() {
  return (
    <section
      className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 overflow-hidden"
      style={{ background: "#0A2A22" }}
    >
      {/* Gradiente radial */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 65% at 50% 50%, #163d2e 0%, transparent 68%)",
        }} />

      {/* Líneas decorativas */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
        className="absolute top-10 sm:top-16 inset-x-0 flex justify-center origin-center"
      >
        <div className="w-32 sm:w-48 h-px" style={{ background: "rgba(214,175,87,0.2)" }} />
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.1, ease: EASE }}
        className="absolute bottom-10 sm:bottom-16 inset-x-0 flex justify-center origin-center"
      >
        <div className="w-32 sm:w-48 h-px" style={{ background: "rgba(214,175,87,0.2)" }} />
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col gap-6 sm:gap-8">

        {/* Etiqueta */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[9px] sm:text-[10px] tracking-[0.45em] sm:tracking-[0.55em] uppercase"
          style={{ color: "rgba(214,175,87,0.5)", fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Próximamente
        </motion.p>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1]"
            style={{ color: "#D6AF57", fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Café Don Otoniel<br />
            <em className="not-italic" style={{ color: "rgba(214,175,87,0.65)" }}>
              estará listo.
            </em>
          </h2>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.28, ease: EASE }}
          className="text-sm sm:text-base md:text-lg font-light italic leading-[1.8] px-2 sm:px-0"
          style={{ color: "rgba(245,245,220,0.45)", fontFamily: "var(--font-cormorant), Georgia, serif", maxWidth: "32rem", margin: "0 auto" }}
        >
          +30 años de experiencia, cultivados en Sonsón, Antioquia.<br />
          Pronto llega lo que mereces.
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.44 }}
          className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap"
        >
          <div className="w-6 sm:w-8 h-px" style={{ background: "rgba(214,175,87,0.3)" }} />
          <span className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-center"
            style={{ color: "rgba(245,245,220,0.4)", fontFamily: "var(--font-poppins), sans-serif" }}>
            100% colombiano · 100% auténtico
          </span>
          <div className="w-6 sm:w-8 h-px" style={{ background: "rgba(214,175,87,0.3)" }} />
        </motion.div>
      </div>
    </section>
  );
}
