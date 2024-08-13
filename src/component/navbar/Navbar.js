import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sibebar/Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          duration={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/vlad-kulakov/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://t.me/Myssalini">
            <img src="/telegram.png" alt="" />
          </a>
          <a href="https://www.instagram.com/dizzlike_/">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
