import "./App.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WallpaperTitleText } from "./components/WallpaperTitleText";
import { WALLPAPER_TITLES } from "./lib/constants";
import { HideButton } from "./components/HideButton";

function App() {

  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string>("Nature");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each title (in seconds)
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1, // Reverse the order when hiding
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };
  return (
    <>
      <div
        className="fixed inset-0 -z-10 transition-colors duration-700 ease-in-out"
        style={{
          // Directly mapping ID to a color for testing
          backgroundColor:
            activeId === "Nature"
              ? "#22c55e"
              : activeId === "SciFi"
                ? "#3b82f6"
                : "#a855f7",
        }}
      />

      <div className="flex flex-col items-start justify-start text-2xl md:text-3xl m-2">
        <HideButton isHidden={isHidden} onToggle={setIsHidden} />
      </div>
      <div
        className={`relative flex w-screen flex-row items-start justify-start transition-opacity duration-300 `}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-4xl md:text-5xl m-4">
          <AnimatePresence>
            {!isHidden && (
              <motion.div
                className="flex flex-col gap-4 text-4xl md:text-6xl text-zinc-600"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {WALLPAPER_TITLES.map((title) => (
                  <motion.div key={title.id} variants={itemVariants}>
                    <WallpaperTitleText
                      key={title.id}
                      isActive={activeId === title.id}
                      onClick={setActiveId}
                      title={title}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
