import { motion, useViewportScroll, useTransform } from "framer-motion";

function App() {
  const { scrollYProgress } = useViewportScroll();
  const background1Y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const background2Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const background3Y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const sunScale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const sunOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div className="relative w-full h-screen">
        <motion.div
          className="absolute"
          id="sun"
          style={{
            backgroundImage: `url(${"/sun.svg"})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "60%",
            height: "100%",
            scale: sunScale,
            zIndex: 0, // ensure the sun is behind mountain-1
            y: sunY,
          }}
        ></motion.div>
        <motion.div
          className="absolute"
          id="mountain-1"
          style={{
            backgroundImage: `url(${"/mountain-1.svg"})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            width: "100%",
            height: "100%",
            y: background1Y,
            zIndex: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute"
          id="mountain-2"
          style={{
            backgroundImage: `url(${"/mountain-2.svg"})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            width: "100%",
            height: "100%",
            y: background2Y,
            zIndex: 2,
          }}
        ></motion.div>
        <motion.div
          className="absolute"
          id="mountain-3"
          style={{
            backgroundImage: `url(${"/mountain-3.svg"})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            width: "100%",
            height: "100%",
            zIndex: 3,
            y: background3Y,
          }}
        ></motion.div>
      </div>
      <div
        id="bg"
        className="relative flex justify-center items-center text-white text-[72px]"
        style={{
          height: "100vh",
          backgroundColor: "#282A57",
          zIndex: 4,
        }}
      >
        <h2>Woah.</h2>
      </div>
    </>
  );
} // add this line

export default App; // add this line
