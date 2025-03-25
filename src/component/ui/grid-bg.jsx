import Mask from "./customCursor";

export const GridBg = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-[size:40px_40px] bg-[image:linear-gradient(to_right,#1c1c1c_2px,transparent_2px),linear-gradient(to_bottom,#1c1c1c_2px,#0c0c0c_1px)]  h-screen w-screen  ">
      <div
        className="absolute md:w-24 w-16 md:h-[120vw] h-[180vw] md:bg-teal-50/30 bg-teal-100-50/20 md:blur-3xl blur-xl
        md:-rotate-60 -rotate-45  md:-top-[58vw] -top-[80vw] left-0 rounded-4xl pointer-events-none z-10 "
      ></div>
      <Mask />
      {children}
    </div>
  );
};
