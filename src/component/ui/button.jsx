import { useRef } from "react";
import gsap from "gsap";
import { useSetRecoilState } from "recoil";
import { customCursorSizeAtom } from "../../store/atom";

const variantStyles = {
  main: "bg-[#242C31] md:text-lg text-sm py-1 px-3 text-[#f9f9f9] font-medium rounded border-teal-50/10 border hover:bg-teal-900 cursor-pointer transition-all",
  blackBg:
    "bg-[#f9f9f9] md:text-lg text-sm py-1 px-3 text-[#242C31] font-medium rounded border-teal-50/10 border hover:bg-teal-50 cursor-pointer transition-all",
};

export const Button = ({ variant = "main", text }) => {
  const buttonRef = useRef(null);
  const setCustomCursorSize = useSetRecoilState(customCursorSizeAtom);
  const mouseHandlerEnter = () => {
    setCustomCursorSize(0);
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current.querySelectorAll(".firstDiv span"), {
      y: "-118%",
      opacity: 1,
      rotateX: 0,
      duration: 0.4,
      stagger: 0.02,
    });

    gsap.to(buttonRef.current.querySelectorAll(".secondDiv span"), {
      y: -20,
      opacity: 1,
      rotateX: 90,
      duration: 0.4,
      stagger: 0.02,
    });
  };

  const mouseHandlerLeave = () => {
    setCustomCursorSize(50);
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current.querySelectorAll(".firstDiv span"), {
      y: "0%",
      opacity: 1,
      rotateX: -90,
      duration: 0.4,
      stagger: 0.02,
    });

    gsap.to(buttonRef.current.querySelectorAll(".secondDiv span"), {
      y: 0,
      rotateX: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.02,
    });
  };

  return (
    <button
      ref={buttonRef}
      className={`${variantStyles[variant]} relative overflow-hidden`}
      onMouseEnter={mouseHandlerEnter}
      onMouseLeave={mouseHandlerLeave}
      aria-label={text}
    >
      {/* First layer for hover animation */}
      <div className="absolute top-full flex items-center justify-center firstDiv">
        {text.split("").map((char, key) => (
          <span className="inline-block" key={key}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* Second layer (default visible text) */}
      <div className="relative secondDiv">
        {text.split("").map((char, key) => (
          <span className="inline-block" key={key}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </button>
  );
};
