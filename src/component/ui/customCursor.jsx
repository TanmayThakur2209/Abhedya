// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { useRecoilValue } from "recoil";
// import { customCursorSizeAtom } from "../../store/atom";

// export default function Mask() {
//   const customCursorSize = useRecoilValue(customCursorSizeAtom);
//   const maskRef = useRef(null);

//   useEffect(() => {
//     const mask = maskRef.current;
//     gsap.to(mask, {
//       width: `${customCursorSize}px`,
//       height: `${customCursorSize}px`,
//       duration: 0.5,
//       ease: "circ.out",
//     });
//     const handleMouseMove = (e) => {
//       gsap.to(mask, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 2,
//         ease: "elastic.out(0.11,0.75)",
//       });
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, [customCursorSize]);

//   return (
//     <div
//       ref={maskRef}
//       className="fixed top-0 left-0 bg-teal-50 rounded-full pointer-events-none z-10 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
//     ></div>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ColorSplashCursor() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const splash = document.createElement("div");
      container.appendChild(splash);

      // Color palette for random splashes
      const colors = ["#0b3d2a", "#145c40", "#1b7d58", "#25a373", "#33c48e"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      Object.assign(splash.style, {
        position: "fixed",
        width: `${10 + Math.random() * 10}px`,
        height: `${10 + Math.random() * 10}px`,
        backgroundColor: randomColor,
        borderRadius: "50%",
        filter: "blur(12px)",
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        pointerEvents: "none",
        opacity: "0.8",
        zIndex: "50",
        mixBlendMode: "difference",
      });

      gsap.to(splash, {
        x: (Math.random() - 0.5) * 100, // Random spread
        y: (Math.random() - 0.5) * 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => splash.remove(), // Remove after animation
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"></div>;
}
