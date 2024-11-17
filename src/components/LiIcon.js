import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference, time }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  return (
    <figure className="stroke-dark absolute left-0 dark:stroke-light">
      <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="stroke-primary  stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="fill-light stroke-[5px] dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          pathLength="1"
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
