import "./App.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WallpaperTitleText } from "./components/WallpaperTitleText";
import { WALLPAPER_TITLES } from "./lib/constants";
import { CONTAINER_ANIMATION_CONFIG } from "./lib/animationConfig";
import { WALLPAPER_DATA} from "./lib/data";
import { HideButton } from "./components/HideButton";

function App() {

  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string>(WALLPAPER_TITLES[0].id);
  const activeUrl = WALLPAPER_DATA[activeId];
  const backgroundImage = activeUrl?.[0]?.src || '';

  return (
    <>
      <div
        key={backgroundImage}
        className="fixed inset-0 -z-10 bg-cover bg-center animate-wallpaper"
        style={{
          // When testing, swap images out for background colour
          // backgroundImage: `url(${backgroundImage})`,  // REMOVE WHEN WALLPAPERS ARE ADDED
          backgroundColor:`${backgroundImage}`            // Change to a backup colour for wallpapers
        }}
      />

      <div className="flex flex-col items-start justify-start text-2xl md:text-3xl m-2">
        <HideButton isHidden={isHidden} onToggle={setIsHidden} />
      </div>
      <div
        className={`relative flex w-screen flex-row items-start justify-start transition-opacity duration-300 `}
      >
        <div className="flex flex-col items-center justify-center m-4">
          <AnimatePresence>
            {!isHidden && (
              <motion.div
                className="flex flex-col gap-4 text-4xl md:text-6xl text-zinc-600"
                variants={CONTAINER_ANIMATION_CONFIG}
                initial="hidden" 
                animate="visible"
                exit="exit"
              >
                {WALLPAPER_TITLES.map((title) => (

                    <WallpaperTitleText
                      key={title.id}
                      isActive={activeId === title.id}
                      onClick={setActiveId}
                      title={title}
                    />

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
