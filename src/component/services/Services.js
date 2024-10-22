import "./Services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const HrefButton = () => {
    window.location.href = "#Contact";
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>I will help your brand take on a new visual quality</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="images/people.png" alt="" />
          <h1>
            <motion.b whileHover={{ color: "rgb(255, 165, 0)" }}>
              Unique
            </motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgb(255, 165, 0)" }}>
              For Your
            </motion.b>{" "}
            Business.
          </h1>
          <button>What I do ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "rgb(0, 0, 0)" }}
          style={{
            backgroundColor: "transparent",
            color: "rgb(211, 211, 211)",
          }}
        >
          <h2>Innovating</h2>
          <p>
            "Rethinking digital engagement in innovation. Mastering the art of
            frontend technology. Our expertise in creating intuitive, dynamic,
            and user-centric interfaces transforms your vision into reality.
            Stay ahead with innovative designs and cutting-edge solutions."
          </p>
          <button onClick={HrefButton}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "rgb(0, 0, 0)" }}
          style={{
            backgroundColor: "transparent",
            color: "rgb(211, 211, 211)",
          }}
        >
          <h2>Branding</h2>
          <p>
            "Innovation transforms your business. Creating digital solutions
            that inspire and engage your customers. Our technologies deliver
            unique user experiences and help you stand out in the marketplace.
            Trust us to turn your ideas into reality and unlock new
            opportunities for growth."
          </p>
          <button onClick={HrefButton}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "rgb(0, 0, 0)" }}
          style={{
            backgroundColor: "transparent",
            color: "rgb(211, 211, 211)",
          }}
        >
          <h2>Marketing</h2>
          <p>
            "Increasing the effectiveness your marketing. Our innovations
            inspire and engage your audience. We develop digital strategies,
            ensuring effective engagement and improved conversions. Trust us to
            transform your ideas into successful marketing strategies and unlock
            new opportunities to grow your business in the digital age."
          </p>
          <button onClick={HrefButton}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "rgb(0, 0, 0)" }}
          style={{
            backgroundColor: "transparent",
            color: "rgb(211, 211, 211)",
          }}
        >
          <h2>Uniqueness</h2>
          <p>
            "Ideas highlight yours uniqueness. We create unique digital
            strategies that inspire and engage your audience. Our solutions not
            only deliver effective engagement, but also improve business
            processes, but also accelerate adaptation to change and the drive
            for continuous improvement."
          </p>
          <button onClick={HrefButton}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
