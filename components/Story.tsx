"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const illustrationY = useTransform(scrollYProgress, [0, 1], [-16, 16]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-16 sm:py-24 md:py-28 px-4 sm:px-6"
      style={{ background: "#F5F5DC" }}
    >
      {/* Decoración dorada */}
      <div className="pointer-events-none absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 opacity-[0.04]"
        style={{ background: "radial-gradient(circle at top right, #D6AF57, transparent)" }} />

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">

        {/* Ilustración */}
        <motion.div
          style={{ y: illustrationY }}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-56 sm:w-72 md:w-80 lg:w-96">
            <div className="absolute -inset-3 rounded-2xl opacity-20"
              style={{ border: "1px solid #D6AF57" }} />
            <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "3/4" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Logov1_vector.svg"
                alt="Don Otoniel"
                className="w-full h-full object-cover object-top"
                style={{ filter: "sepia(0.08) saturate(1.05)" }}
              />
            </div>
            <p className="mt-3 sm:mt-4 text-center text-[9px] sm:text-[10px] tracking-[0.4em] uppercase"
              style={{ color: "rgba(10,42,34,0.4)", fontFamily: "var(--font-poppins), sans-serif" }}>
              • Don Otoniel •
            </p>
          </div>
        </motion.div>

        {/* Texto */}
        <div className="flex flex-col gap-6 sm:gap-8">

          {/* Etiqueta */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-px" style={{ background: "#D6AF57" }} />
            <span className="text-[9px] sm:text-[10px] tracking-[0.5em] uppercase"
              style={{ color: "#D6AF57", fontFamily: "var(--font-poppins), sans-serif" }}>
              Nuestra historia
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15]"
            style={{ color: "#0A2A22", fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Algo está siendo<br />
            <em className="not-italic" style={{ color: "#D6AF57" }}>cultivado</em>
          </motion.h2>

          {/* Cuerpo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25, ease: EASE }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <p className="text-sm sm:text-[15px] leading-[1.9] sm:leading-[1.95] font-light"
              style={{ color: "rgba(10,42,34,0.72)", fontFamily: "var(--font-poppins), sans-serif" }}>
              No es prisa. Es paciencia convertida en taza.
            </p>
            <p className="text-sm sm:text-[15px] leading-[1.9] sm:leading-[1.95] font-light"
              style={{ color: "rgba(10,42,34,0.72)", fontFamily: "var(--font-poppins), sans-serif" }}>
              Don Otoniel no habla de café como producto.<br />
              Habla de café como calidad.
            </p>
            <p className="text-sm sm:text-[15px] leading-[1.9] sm:leading-[1.95] font-light"
              style={{ color: "rgba(10,42,34,0.72)", fontFamily: "var(--font-poppins), sans-serif" }}>
              +30 años de experiencia.<br />
              +30 años esperando el momento correcto.
            </p>
            <p className="text-sm sm:text-[15px] leading-[1.9] sm:leading-[1.95] font-light italic"
              style={{ color: "rgba(10,42,34,0.5)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(15px, 2vw, 17px)" }}>
              "Ese momento llegará pronto. Y cuando lo haga, te daremos la bienvenida
              a algo que no encontrarás en otro lado."
            </p>
          </motion.div>

          {/* Firma */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.45, ease: EASE }}
            className="flex items-center gap-3 pt-1 sm:pt-2"
          >
            <div className="w-8 h-px" style={{ background: "#D6AF57" }} />
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase"
              style={{ color: "rgba(10,42,34,0.45)", fontFamily: "var(--font-poppins), sans-serif" }}>
              Sonsón, Antioquia · 100% Colombiano
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
