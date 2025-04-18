/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, onClick, type }) {
  const base =
    "inline-block rounded-full text-sm bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const style = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 ",
    small: base + " py-2 px-4 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm px-4 py-2.5 md:px-6 md:py-3.5 hover:text-stone-800 focus:text-stone-800 rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
  };
  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        to={to}
        onClick={onClick}
        disabled={disabled}
        className={style[type]}
      >
        {children}
      </button>
    );

  return (
    <button to={to} disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
