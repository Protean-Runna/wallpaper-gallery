import "./App.css";
import { useState } from 'react';

import { WALLPAPER_TITLES } from "./lib/constants";
import { WallpaperTitleText } from "./components/WallpaperTitleText";
import { HideButton } from "./components/HideButton";
function App() {
  const [isHidden, setIsHidden] = useState<boolean>(false);


  return (
    <>
      <div className="flex flex-col items-start justify-start text-2xl md:text-3xl m-2">
            <HideButton
            isHidden={isHidden}
            onToggle={setIsHidden}
            />
      </div>
      <div className={`relative flex w-screen flex-row items-start justify-start transition-opacity duration-300 ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex flex-col items-center justify-center gap-4 text-4xl md:text-5xl m-4">
          {WALLPAPER_TITLES.map((title) => (
            <WallpaperTitleText key={title.id} title={title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
