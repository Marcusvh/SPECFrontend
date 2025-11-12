import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addCustomer } from "../../hooks/CustomerConsumer";

const SignUpPage: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign-up data:", form.country);
    addCustomer("Customer", undefined, {customerId: Math.floor(Math.random() * 100000), country: form.country})
  };

  return (
    <div className="h-screen bg-[#050510] text-white font-['Orbitron'] flex flex-col relative overflow-hidden">
      {/* Subtle animated grid / glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0a0a16_0%,#050510_80%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,0,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-16 py-6 border-b border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
        <h1 className="text-3xl text-cyan-400 font-bold tracking-wider drop-shadow-[0_0_12px_#00ffff]">
          NEONVERSE // SIGNUP
        </h1>
        <Link
          to="/"
          className="text-pink-500 hover:text-pink-400 transition uppercase text-sm"
        >
          Back to Home
        </Link>
      </header>

      {/* Main signup dashboard */}
      <main className="relative z-10 flex-1 grid grid-cols-2 gap-10 px-16 py-10">
        {/* Left panel: info */}
        <div className="flex flex-col justify-center px-8 bg-black/40 backdrop-blur-lg rounded-lg border border-cyan-400/20 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
          <h2 className="text-4xl text-cyan-300 mb-6 drop-shadow-[0_0_20px_#0ff]">
            Create Your Access Node
          </h2>
          <p className="text-cyan-100/80 text-lg leading-relaxed max-w-md">
            Register for full system access to NEONVERSE Control Grid. Your credentials
            will be encrypted and synced to the neural core.
          </p>
          <div className="mt-10">
            <Link
              to="/signup"
              className="text-pink-400 hover:text-pink-300 underline uppercase text-sm"
            >
              Already have access? Login
            </Link>
          </div>
        </div>

        {/* Right panel: form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center space-y-5 bg-black/60 border border-pink-500/30 rounded-lg px-10 py-12 shadow-[0_0_40px_rgba(255,0,255,0.2)] backdrop-blur-xl"
        >
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              className="col-span-2 px-4 py-3 bg-black/60 border border-cyan-400/40 rounded-md text-cyan-200 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_#00ffff] transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="col-span-2 px-4 py-3 bg-black/60 border border-cyan-400/40 rounded-md text-cyan-200 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_#00ffff] transition"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="col-span-2 px-4 py-3 bg-black/60 border border-cyan-400/40 rounded-md text-cyan-200 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_#00ffff] transition"
            />

            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              required
              className="col-span-2 px-4 py-3 bg-black/60 border border-cyan-400/40 rounded-md text-cyan-200 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_#00ffff] transition"
            >
              <option value="">Select Country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="de">Germany</option>
              <option value="se">Sweden</option>
              <option value="jp">Japan</option>
              <option value="in">India</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-8 py-3 bg-cyan-500/10 border border-cyan-400 text-cyan-300 font-semibold rounded-md uppercase tracking-wider hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_#00ffff] transition cursor-pointer"
          >
            Create Account
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4 text-sm text-cyan-200/70 border-t border-cyan-400/20">
        © 2088 NEONVERSE Systems | Secure Grid Access
      </footer>
    </div>
  );
};

export default SignUpPage;
