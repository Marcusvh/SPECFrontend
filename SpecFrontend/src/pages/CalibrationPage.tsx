import { useEffect, useState } from "react";
import "../css/heh.css";
import { Link } from "react-router-dom";

export default function CalibrationPage() {
  const sequence = [
    "BIO-SIGNATURE LOCKED",
    "NEURAL DRIVERS ENGAGED",
    "PSIONIC CHANNELS OPENING",
    "AUGMENTATION MATRIX ALIGNMENT: 37%",
    "ELECTRO-NEURAL INFUSION INITIATED",
    "CORTICAL BARRIERS DISSOLVING",
    "QUANTUM BRIDGE ACTIVATION…",
    "SYNAPTIC OVERCLOCKING ENABLED",
    "NEURAL ASCENSION IN PROGRESS",
    ">>> SYSTEM BREACHING CYBER GRID <<<"
  ];

  const [step, setStep] = useState(0);
  const [shake, setShake] = useState(false);
  const [heartbeat, setHeartbeat] = useState(false);

  // progress steps
  useEffect(() => {
    const t = setInterval(() => {
      setStep((s) => Math.min(s + 1, sequence.length - 1));
      // trigger heartbeat animation
      setHeartbeat(true);
      setTimeout(() => setHeartbeat(false), 350);
    }, 900);

    return () => clearInterval(t);
  }, []);

  // random camera shake when arcs zap
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 180);
    }, 800); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`ascension-container ${shake ? "shake" : ""} ${heartbeat ? "heartbeat" : ""}`}>
      
      {/* wave distortion overlay */}
      <div className="shader-waves"></div>

      {/* afterimage ghost blur */}
      <div className="afterimage"></div>

      {/* digital rain */}
      <div className="digital-rain"></div>

      {/* distortion scanlines */}
      <div className="screen-distortion"></div>

      {/* Light pillars */}
      <div className="lightbeam beam1"></div>
      <div className="lightbeam beam2"></div>
      <div className="lightbeam beam3"></div>

      {/* Glyphs */}
      <div className="glyph g1"></div>
      <div className="glyph g2"></div>
      <div className="glyph g3"></div>

      {/* Electric arcs */}
      <div className="arc arc1"></div>
      <div className="arc arc2"></div>
      <div className="arc arc3"></div>

      {/* Core */}
      <div className="ascension-core"></div>

      {/* UI overlays */}
      <div className="overlay left">
        <h3>NEURAL STATUS</h3>
        <p>COHERENCE: 94%</p>
        <p>LATENCY: 0.2ms</p>
        <p>ENTANGLEMENT: ACTIVE</p>
        <p>NOOSPHERIC CHANNEL: OPEN</p>
      </div>

      <div className="overlay right">
        <h3>AUGMENT FEED</h3>
        <p>NEURODRIVE: 183%</p>
        <p>LOAD BALANCE: NOMINAL</p>
        <p>BREACH RISK: HIGH</p>
        <p><Link to={"/"}>STABILITY: <span className="warning">UNSAFE</span></Link></p>
      </div>

      {/* sequence */}
      <div className="sequence-text">
        {sequence.slice(0, step + 1).map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>

      {/* vortex */}
      <div className="vortex"></div>
    </div>
  );
}
