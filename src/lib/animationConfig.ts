
// Put all the framer animation here, I MEAN IT!

export const CONTAINER_ANIMATION_CONFIG = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1, 
      },
    },
}

export const TITLE_SPRING_CONFIG = {
    initial: {
        scaleY: 1.05,
    },
    hover: {
        scaleY: 1.15,
    },
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        mass: 0.7,
    }
} as const;

export const TITLE_VARIANTS_CONFIG = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
}