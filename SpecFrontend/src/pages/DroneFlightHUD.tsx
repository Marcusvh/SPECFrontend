import { Link } from "react-router-dom";
import "../css/heh.css";
import { useEffect, useState } from "react";

export default function DroneFlightHUD() {
  const [speed, setSpeed] = useState(32);
  const [alt, setAlt] = useState(120);
  const [signal, setSignal] = useState(92);

  // Random telemetry movement
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(s => Math.max(0, Math.min(100, s + (Math.random() * 10 - 5))));
      setAlt(a => Math.max(0, Math.min(300, a + (Math.random() * 8 - 4))));
      setSignal(sg => Math.max(0, Math.min(100, sg + (Math.random() * 6 - 3))));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hud-screen">
      <div className="hud-scanlines" />

      {/* Reticle */}
      <div className="hud-reticle">
        <div className="circle" />
        <div className="crosshair-v" />
        <div className="crosshair-h" />
      </div>

      {/* Telemetry panels */}
      <div className="hud-panel left">
        <p>SPEED: {speed.toFixed(0)} km/h</p>
        <p>ALTITUDE: {alt.toFixed(0)} m</p>
      </div>

      <div className="hud-panel right">
        <p>SIGNAL: {signal.toFixed(0)}%</p>
        <p>CAM FEED: STABLE</p>
      </div>

      {/* Glowing “DRONE ACTIVE” */}
      <div className="hud-status">
        <Link to={"/"}>DRONE ONLINE</Link>
        </div>
    </div>
  );
}
