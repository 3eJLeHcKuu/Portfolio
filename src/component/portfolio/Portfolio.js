import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Women's Shop",
    img: "https://qph.cf2.quoracdn.net/main-qimg-bf7ba2b94a153b2a96a6661032453e18-pjlq",
    desc: "Layout of the initial pages of a women's clothing website. Here you can select the product you like, add it to your cart, in the upper right corner you can open the cart and see the products you have added. You can also use the call request feature, which will open a new window for you. It is possible to open the product in a separate window and add it to the cart directly from there.",
    link: "https://github.com/3eJLeHcKuu/Womens-shop",
  },
  {
    id: 2,
    title: "Tic Tac Game",
    img: "tic tac.png",
    desc: "A simple tic-tac-toe game board that you can interact with. The game has a winner announcement in the form of a highlighted line, as well as a winner announcement. There is also a movement history that you can interact with. An important feature is that progress is always saved when you refresh the page so you don't lose it. ",
    link: "https://github.com/3eJLeHcKuu/Tic-Tac-Game",
  },
  {
    id: 3,
    title: "Todo List",
    img: "todo list.png",
    desc: "This is a shopping todo list application In it you can write your request, delete it, edit it, and you can mark it as done. The app is made in React using UUID V4 to generate unique identifiers for each new task that is added to the todo list. The list can be saved either in a separate file or in local storage.",
    link: "https://github.com/3eJLeHcKuu/Todo-list",
  },
  {
    id: 4,
    title: "Weather App",
    img: "weather app.png",
    desc: "An app where you can get real time weather for any city, as well as humidity and wind speed. Implemented through api data from OpenWeatherMap. I was very interested in the concept of emoticons in the app, so I decided to implement it through HTML and JS.",
    link: "https://github.com/3eJLeHcKuu/Smile-weather",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>Check Project</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
