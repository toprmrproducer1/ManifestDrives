"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHoveringAction, setIsHoveringAction] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring values for the trailing ring (simulates 120ms lerp delay)
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isAction = target.tagName.toLowerCase() === "a" ||
                       target.tagName.toLowerCase() === "button" ||
                       target.closest("button") || 
                       target.closest("a") ||
                       target.closest('.hover-target');
                       
      const isText = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "div"].includes(target.tagName.toLowerCase()) && !isAction;

      setIsHoveringAction(!!isAction);
      setIsHoveringText(!!(isText && !isAction && target.textContent && target.textContent.trim().length > 0 && window.getComputedStyle(target).cursor === 'text'));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Primary Dot (Snappy) */}
      <motion.div
        className="fixed top-0 left-0 bg-[#E8000D] rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: 6,
          height: 6,
          scale: isHoveringAction ? 0 : (isHoveringText ? 1.5 : 1),
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
      
      {/* Trailing Ring (Lerped) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] bg-transparent border border-[rgba(232,0,13,0.5)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHoveringAction ? 52 : 28,
          height: isHoveringAction ? 52 : 28,
          borderColor: isHoveringAction ? "rgba(232,0,13,0.6)" : "rgba(232,0,13,0.5)"
        }}
        transition={{ type: "tween", duration: 0.2 }}
      />
    </>
  );
}
