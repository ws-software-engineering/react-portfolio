import { NavLink } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  return (
    <Navbar
      links={[
        <NavLink key={1} className={({ isActive }) => (isActive ? "active" : "")} to="/">
          About Me
        </NavLink>,
        <NavLink key={2} className={({ isActive }) => (isActive ? "active" : "")} to="/portfolio">
          Portfolio
        </NavLink>,
        <NavLink key={3} className={({ isActive }) => (isActive ? "active" : "")} to="/contact">
          Contact
        </NavLink>,
        <NavLink key={4} className={({ isActive }) => (isActive ? "active" : "")} to="/resume">
          Resume
        </NavLink>,
      ]}
    />
  );
}
