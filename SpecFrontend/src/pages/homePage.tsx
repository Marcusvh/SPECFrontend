import '../css/homepage.css'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
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
          <div className="metric">
            <span>CPU</span>
            <div className="bar"><div className="fill" style={{ width: "68%" }} /></div>
          </div>
          <div className="metric">
            <span>Network</span>
            <div className="bar"><div className="fill magenta" style={{ width: "82%" }} /></div>
          </div>
          <div className="metric">
            <span>Energy</span>
            <div className="bar"><div className="fill cyan" style={{ width: "45%" }} /></div>
          </div>
        </section>

        <section className="panel controls">
          <h2>Controls</h2>
          <button className="neon-btn">Deploy Drone</button>
          <Link to={"/"} className="neon-btn">Enter the Grid</Link>
          <Link to={"/viewCustomers"} className="neon-btn alt">View All Customers</Link>
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