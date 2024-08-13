import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-between items-center px-28 py-7 shadow border-b">
      <h1 className="text-3xl font-bold">Logo</h1>
      <ul className="flex gap-8 text-xl items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold underline" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold underline" : ""
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold underline" : ""
          }
        >
          Conact Us
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold underline" : ""
          }
        >
          Courses
        </NavLink>
        <NavLink
          to="/donate"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold underline" : ""
          }
        >
          Donate
        </NavLink>
      </ul>
      <div className="flex gap-4">
        <button className="bg-orange-500 hover:bg-orange-500/90 px-6 py-2 rounded-full text-white font-semibold text-lg">
          Login
        </button>
        <button className="border-2 border-orange-500 hover:bg-slate-50 px-6 py-2 rounded-full text-orange-500 font-semibold text-lg">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Nav;
