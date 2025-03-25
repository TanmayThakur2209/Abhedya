import { useSetRecoilState } from "recoil";
import { customCursorSizeAtom } from "../../store/atom";
import { useState } from "react";

export const CenterImage = () => {
  const [isHover, setIsHover] = useState(false);
  const setCustomCursorSize = useSetRecoilState(customCursorSizeAtom);
  const mouseHandlerEnter = () => {
    setIsHover(true);
    setCustomCursorSize(2000);
  };
  const mouseHandlerLeave = () => {
    setIsHover(false);
    setCustomCursorSize(50);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="absolute -rotate-4 md:w-[20vw] md:h-[20vw] sm:w-56 sm:h-56 w-44 h-44 rounded-xl bg-[#0E3F3A] border border-teal-100/10"></div>
      <div
        className="relative sm:w-56 md:w-[20vw] md:h-[20vw] sm:h-56 w-44 h-44 rounded-xl bg-gradient-to-br from-[#031615] to-[#115E59] rotate-2 border border-teal-100/20 shadow shadow-teal-950"
        onMouseLeave={mouseHandlerLeave}
        onMouseEnter={mouseHandlerEnter}
      >
        <img
          className={`object-cover absolute bottom-0 md:w-[22vw] md:h-[22vw] sm:w-60 sm:h-60 w-48 h-48 ${isHover ? "invert" : ""} `}
          src="../../../public/rb_25585 2.png"
        />
      </div>
    </div>
  );
};
