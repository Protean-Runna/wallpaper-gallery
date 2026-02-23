import type { WallpaperTitle } from "../lib/types";
import { motion } from "framer-motion";
import {
  TITLE_VARIANTS_CONFIG,
  TITLE_SPRING_CONFIG,
} from "../lib/animationConfig";
type WallpaperTitleTextProps = {
  title: WallpaperTitle;
  isActive: boolean;
  onClick: (value: string) => void;
};

export const WallpaperTitleText = ({
  title,
  isActive,
  onClick,
}: WallpaperTitleTextProps) => {
  return (
    <>
      <motion.div
        key={title.id}
        variants={TITLE_VARIANTS_CONFIG}
        animate={TITLE_SPRING_CONFIG.initial}
        whileHover={TITLE_SPRING_CONFIG.hover}
        transition={TITLE_SPRING_CONFIG.transition}
      >
        <button
          className={`
                        bg-transparent uppercase 
                        ${isActive ? "text-zinc-100" : "text-zinc-600 hover:text-zinc-400"} 
                        text-nowrap
                        `}
          onClick={() => onClick(title.id)}
        >
          <h2>{title.displayName}</h2>
        </button>
      </motion.div>
    </>
  );
};
