import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const AnimatedStars = ({ src, size, delay }) => {
    const controls = useAnimationControls();
    const starShadow = `
    drop-shadow(0px 3px 4px rgba(0,0,0,1))
    drop-shadow(0px 12px 20px rgba(0,0,0,0.7))
    `;

  useEffect(() => {
    controls.start({
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    });
  }, [controls, delay]);


  useEffect(() => {
    controls.start({
      width: size.width,
      height: size.height,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    });
  }, [controls, size.width, size.height]);

  useEffect(() => {
    controls.start({
      filter: [
        `${starShadow} brightness(1)`,
        `${starShadow} brightness(2.2)`,
        `${starShadow} brightness(1)`
        ],
      transition: {
        duration: 3 + Math.random() * 1.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    });
  }, [controls, delay]);

  return (
    <motion.img
      src={src}
      alt="star"
      initial={{
        rotate: 180,
        opacity: 0,
        scale: 0.6,
        width: size.width,
        height: size.height,
      }}
      animate={controls}
    />
  );
};

export default AnimatedStars;