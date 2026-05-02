import "./App.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WallpaperTitleText } from "./components/WallpaperTitleText";
import { WALLPAPER_TITLES } from "./lib/constants";
import { CONTAINER_ANIMATION_CONFIG } from "./lib/animationConfig";
import { WALLPAPER_DATA } from "./lib/data";
import { HideButton } from "./components/HideButton";

function App() {
  //All States here
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string>(WALLPAPER_TITLES[0].id);
  const [loadedId, setLoadedId] = useState<string>(activeId);
  const [isTransitioning, setIsTransitioning] = useState(false);
  //
  useEffect(() => {
    const nextUrl = WALLPAPER_DATA[activeId]?.[0]?.src;
    if (!nextUrl) return;

    setIsTransitioning(true);
    const img = new Image();
    img.src = nextUrl;
    img.onload = () => {
      setLoadedId(activeId);
      setIsTransitioning(false);
    };
  }, [activeId]);


  const activeUrl = WALLPAPER_DATA[loadedId];
  const backgroundImage = activeUrl?.[0]?.src || "";
  const backupColour = `#0c0d0e`;

  const clickHandler = (id:string) => {
    if (isTransitioning) return;
    setActiveId(id);

  };

  return (
    <>
      {/**Wallpaper Stuff */}
      <AnimatePresence mode="wait">
        <motion.div
          key={loadedId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Wallpapers are here
            backgroundColor: backupColour, // Backup colour in case no wallpapers are loaded
          }}
        />
      </AnimatePresence>

      {/**NAVIGATION */}
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
                className={`flex flex-col gap-4 text-4xl md:text-6xl text-zinc-600`}
                variants={CONTAINER_ANIMATION_CONFIG}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {WALLPAPER_TITLES.map((title) => (
                  <WallpaperTitleText
                    key={title.id}
                    isActive={activeId === title.id}
                    isBusy={isTransitioning}
                    onClick={clickHandler}
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
