import "./App.css";
import { WALLPAPER_TITLES } from "./lib/constants";
import { WallpaperTitleText } from "./components/WallpaperTitleText";

function App() {
  return (
    <>
      <div className="relative flex w-screen flex-row items-start justify-start">
        <div className="flex flex-col items-center justify-center gap-4 text-nowrap text-4xl md:text-6xl text-zinc-600 m-4">
          {WALLPAPER_TITLES.map((title) => (
            <WallpaperTitleText key={title.id} title={title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
