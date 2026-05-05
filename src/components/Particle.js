import React from "react";
import { motion } from "framer-motion";

function Particle() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
      {/* Circle Top Right */}
      <motion.svg
        animate={{ y: [0, 20, 0], rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", top: "10%", right: "15%", opacity: 0.6 }}
        width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
      </motion.svg>

      {/* Zigzag Left */}
      <motion.svg
        animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "30%", left: "10%", opacity: 0.5 }}
        width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 10L10 1L20 18L30 1L40 18L49 10" stroke="white" strokeWidth="2" />
      </motion.svg>

      {/* Cross/Plus Bottom Right */}
      <motion.svg
        animate={{ rotate: [-45, 45, -45], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "60%", right: "10%", opacity: 0.5 }}
        width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 0V30M0 15H30" stroke="white" strokeWidth="2" />
      </motion.svg>

      {/* Triangle Bottom Left */}
      <motion.svg
        animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", bottom: "20%", left: "15%", opacity: 0.6 }}
        width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 2L38 38H2L20 2Z" stroke="white" strokeWidth="2" />
      </motion.svg>
      
      {/* Background Glow */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '40%', 
        background: 'radial-gradient(circle, rgba(84,84,212,0.15) 0%, rgba(14,13,22,0) 70%)',
        filter: 'blur(60px)', zIndex: -1
      }}></div>
      
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%', width: '40%', height: '40%', 
        background: 'radial-gradient(circle, rgba(84,84,212,0.15) 0%, rgba(14,13,22,0) 70%)',
        filter: 'blur(60px)', zIndex: -1
      }}></div>
    </div>
  );
}

export default Particle;
