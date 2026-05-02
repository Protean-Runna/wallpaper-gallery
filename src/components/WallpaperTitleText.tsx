import type { WallpaperTitle } from "../lib/types";
import { motion } from "framer-motion";
import {
  TITLE_VARIANTS_CONFIG,
  TITLE_SPRING_CONFIG,
} from "../lib/animationConfig";
type WallpaperTitleTextProps = {
  title: WallpaperTitle;
  isActive: boolean;
  isBusy: boolean;
  onClick: (value: string) => void;
};

export const WallpaperTitleText = ({
  title,
  isActive,
  isBusy,
  onClick,
}: WallpaperTitleTextProps) => {
  return (
    <>
      <motion.div
        key={title.id}
        variants={TITLE_VARIANTS_CONFIG}
        animate={TITLE_SPRING_CONFIG.initial}
        whileHover={isBusy ? {} : TITLE_SPRING_CONFIG.hover}
        transition={TITLE_SPRING_CONFIG.transition}
      >
        <button
          className={`
                        bg-transparent uppercase 
                        ${isBusy ? "opacity-75" : "opacity-100"}
                        ${isActive ? "text-zinc-100" : "text-zinc-600 hover:text-zinc-400"} 
                        text-nowrap
                        `}
          style={{cursor: isBusy ? 'wait' : 'pointer'}}
          disabled={isBusy}
          onClick={() => onClick(title.id)}
        >
          <h2>{title.displayName}</h2>
        </button>
      </motion.div>
    </>
  );
};
