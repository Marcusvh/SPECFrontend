import { Link } from "react-router-dom"

interface headerProps {
  title: string;
}

const Header: React.FC<headerProps> = ({
  title,
}) => {
    return (
        <header className="relative z-10 flex justify-between items-center px-16 py-6 border-b border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
            <h1 className="text-3xl text-cyan-400 font-bold tracking-wider drop-shadow-[0_0_12px_#00ffff]">
            NEONVERSE // {title}
            </h1>
            <Link
            to="/"
            className="text-pink-500 hover:text-pink-400 transition uppercase text-sm"
            >
            Back to Home
            </Link>
        </header>
    )
}
export default Header