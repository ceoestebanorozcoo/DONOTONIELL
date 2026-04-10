"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE, delay: d },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6 py-16 sm:py-24"
      style={{ background: "#0A2A22" }}
    >
      {/* Fondo radial verde */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 45%, #163d2e 0%, #0e2e22 50%, #071D18 100%)",
        }} />

      {/* Aura dorada suave arriba */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-48 sm:h-72"
        style={{
          background:
            "radial-gradient(ellipse 50% 100% at 50% 0%, rgba(214,175,87,0.055) 0%, transparent 70%)",
        }} />

      {/* Fade inferior verde */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 sm:h-40"
        style={{ background: "linear-gradient(to top, #071D18 0%, transparent 100%)" }} />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center gap-4 sm:gap-5 w-full max-w-xs sm:max-w-sm md:max-w-xl"
      >
        {/* Badge */}
        <motion.p custom={0} variants={fadeUp}
          className="text-[9px] sm:text-[10px] tracking-[0.45em] sm:tracking-[0.55em] uppercase"
          style={{ color: "rgba(214,175,87,0.6)", fontFamily: "var(--font-poppins), sans-serif" }}>
          Café de Especialidad
        </motion.p>

        {/* Línea divisora */}
        <motion.div custom={0.3} variants={fadeUp}
          className="w-16 sm:w-24 h-px"
          style={{ background: "rgba(214,175,87,0.25)" }} />

        {/* Logo circular */}
        <motion.div custom={0.4} variants={fadeUp} className="relative">
          <div className="absolute rounded-full pointer-events-none"
            style={{
              inset: "-14px",
              background: "radial-gradient(circle, rgba(214,175,87,0.14) 0%, transparent 65%)",
              filter: "blur(22px)",
            }} />
          <div className="absolute rounded-full pointer-events-none"
            style={{ inset: "-6px", border: "1px solid rgba(214,175,87,0.2)" }} />
          <div
            className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full flex items-center justify-center overflow-hidden"
            style={{
              background: "#FEFBF1",
              border: "2px solid rgba(214,175,87,0.5)",
              boxShadow: "0 6px 60px rgba(7,29,24,0.55), 0 0 40px rgba(214,175,87,0.07)",
            }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logov1_vector.svg"
              alt="Don Otoniel — retrato"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </motion.div>

        {/* Lettering Don Otoniel */}
        <motion.div custom={0.5} variants={fadeUp}>
          <span
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap"
            style={{
              fontFamily: "var(--font-dancing), cursive",
              color: "#D6AF57",
              textShadow: "0 2px 32px rgba(214,175,87,0.22), 0 1px 0 rgba(180,140,40,0.4)",
            }}
          >
            Don Otoniel
          </span>
        </motion.div>

        {/* Ornamento */}
        <motion.div custom={0.52} variants={fadeUp}
          className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 sm:w-12 h-px" style={{ background: "rgba(214,175,87,0.25)" }} />
          <div className="w-1 h-1 rotate-45" style={{ background: "rgba(214,175,87,0.45)" }} />
          <div className="w-2 h-2 rounded-full border" style={{ borderColor: "rgba(214,175,87,0.35)" }} />
          <div className="w-1 h-1 rotate-45" style={{ background: "rgba(214,175,87,0.45)" }} />
          <div className="w-8 sm:w-12 h-px" style={{ background: "rgba(214,175,87,0.25)" }} />
        </motion.div>

        {/* Heading */}
        <motion.h1 custom={0.62} variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug px-2"
          style={{
            color: "#D6AF57",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            letterSpacing: "0.02em",
          }}>
          Estamos creando algo único
        </motion.h1>

        {/* Subtítulo */}
        <motion.p custom={0.73} variants={fadeUp}
          className="text-sm sm:text-base md:text-[17px] font-light leading-[1.85] italic px-4 sm:px-0"
          style={{
            color: "rgba(245,245,220,0.5)",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            maxWidth: "28rem",
          }}>
          Pronto lo sentirás en cada aroma,<br />
          en cada sorbo, en cada historia.
        </motion.p>

        {/* Origen */}
        <motion.p custom={0.82} variants={fadeUp}
          className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase"
          style={{
            color: "rgba(245,245,220,0.28)",
            fontFamily: "var(--font-poppins), sans-serif",
          }}>
          Sonsón, Antioquia.
        </motion.p>

      </motion.div>
    </section>
  );
}
