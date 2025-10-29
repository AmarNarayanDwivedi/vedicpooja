import { useState, useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

/**
 * Animated counter component - animates numbers with formatting
 * @param {Object} props
 * @param {number} props.to - Target number to count to
 */
const AnimatedCounter = ({ to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          setDisplayValue(
            Math.floor(value)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "+"
          );
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return (
    <h3
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-[#E67E22] mb-2"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {displayValue}
    </h3>
  );
};

export default AnimatedCounter;
