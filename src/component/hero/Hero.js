import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const scrollVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Hero() {
  const links = [
    { name: "See the Latest Works", href: "Portfolio" },
    { name: "Contact Me", href: "Contact" },
  ];
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Vlad Kulakov</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {links.map((link) => (
              <motion.a
                href={`#${link.href}`}
                key={link.name}
                variants={textVariants}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="images/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={scrollVariants}
        initial="initial"
        animate="animate"
      >
        Wizard in the world of frontend
      </motion.div>
      <div className="imageContainer">
        <img className="heroPng" src="images/hero.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
