import {useState, useEffect} from "react"
import '../css/homepage.css'
import { Link } from 'react-router-dom'
import Metric from "../components/metric"

const HomePage: React.FC = () => {

  const [cpu, setCpu] = useState(68);
  const [net, setNet] = useState(82);
  const [energy, setEnergy] = useState(45);
  const [memory, setmemory] = useState(62);
  const [gpuTemp, setgpuTemp] = useState(42);
  const [coffee, setcoffee] = useState(15);
  const [quantumEntropy, setquantumEntropy] = useState(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 100));
      setNet(Math.floor(Math.random() * 100));
      setEnergy(Math.floor(Math.random() * 100));
      setmemory(Math.floor(Math.random() * 100));
      setgpuTemp(Math.floor(Math.random() * 100));
      setcoffee(Math.floor(Math.random() * 100));
      setquantumEntropy(Math.floor(Math.random() * 100));
    }, 1200);

    return () => clearInterval(interval);
  }, []);


    return (
   <div className="dashboard">
      <div className="overlay-grid" />

      <header className="dashboard-header">
        <h1 className="neon-title">NEONVERSE CONTROL</h1>
        <p className="neon-subtitle">System Status: Online — 2088</p>
      </header>

      <main className="dashboard-main">
        <section className="panel stats">
          <h2>System Metrics</h2>
          <Metric label="Memory" color="green" value={memory} />
          <Metric label="GPU Temp" color="red" value={gpuTemp} />
          <Metric label="Coffee Level" color="yellow" value={coffee} />
          <Metric label="Quantum Entropy" color="orange" value={quantumEntropy} />
          <Metric label="CPU" color="blue" value={cpu} />
          <Metric label="Network" color="magenta" value={net} />
          <Metric label="Energy" color="cyan" value={energy} />
        </section>


        <section className="panel controls">
          <h2>Controls</h2>
          <Link to={"/Droneflight"} className="neon-btn drone-btn holo">Deploy Drone</Link>
          <Link to={"/Calibration"} className="neon-btn glitch holo" data-text="Enter the Grid">Enter the Grid</Link>
          <Link to={"/Customers"} className="neon-btn alt">View All Customers</Link>
          <Link to={"/Orders"} className='neon-btn alt'>View All Orders</Link>
        </section>

        <section className="panel log">
          <h2>System Log</h2>
          <div className="log-window">
            <p>[2088-11-12] Neural net sync complete...</p>
            <p>[2088-11-12] Cyberlink established...</p>
            <p>[2088-11-12] City grid access granted.</p>
          </div>
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>© 2088 NEONVERSE Systems — Unauthorized Access Prohibited</p>
      </footer>
    </div>
    )
}

export default HomePage