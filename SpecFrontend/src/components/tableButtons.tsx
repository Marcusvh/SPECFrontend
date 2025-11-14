import React from "react";
import { Link } from "react-router-dom";

interface AnimatedButtonProps {
  children: React.ReactNode;
  color?: "cyan" | "pink";
  onClick?: () => void;
  id?: number;
  needLink?: boolean;
  linkRef?: string
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  color = "cyan",
  onClick,
  id,
  needLink = false,
  linkRef,
}) => {
  const colors = {
    cyan: {
      border: "border-cyan-400",
      text: "text-cyan-400",
      hoverBg: "hover:bg-cyan-500",
      hoverText: "hover:text-black",
      shadow: "shadow-[0_0_15px_#0ff]",
      slide: "bg-cyan-400/40",
    },
    pink: {
      border: "border-pink-400",
      text: "text-pink-400",
      hoverBg: "hover:bg-pink-500",
      hoverText: "hover:text-black",
      shadow: "shadow-[0_0_15px_#f0f]",
      slide: "bg-pink-400/40",
    },
  };

  const baseClasses = `relative px-4 py-2 border-2 ${colors[color].border} ${colors[color].text} rounded-md transition ${colors[color].hoverBg} ${colors[color].hoverText} ${colors[color].shadow} overflow-hidden group`;

  return needLink && id !== undefined ? (
    <Link to={`${linkRef}`} onClick={onClick} className={baseClasses}>
      <span className={`absolute top-0 -left-24 w-16 h-full ${colors[color].slide} blur-md opacity-70 group-hover:animate-slide`}></span>
      <span className="relative z-10 font-mono">{children}</span>
    </Link>
  ) : (
    <button onClick={onClick} className={`${baseClasses} cursor-pointer`}>
      <span className={`absolute top-0 -left-24 w-16 h-full ${colors[color].slide} blur-md opacity-70 group-hover:animate-slide`}></span>
      <span className="relative z-10 font-mono">{children}</span>
    </button>
  );
};

export default AnimatedButton;
