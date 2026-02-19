import type { WallpaperTitle } from "../lib/types"

type WallpaperTitleTextProps = {
    title: WallpaperTitle;
}

export const WallpaperTitleText = ({title}:WallpaperTitleTextProps) => {
    return(
        <>
            <button className="bg-transparent focus:text-zinc-100 uppercase hover:text-zinc-400">
                <h2 className="">
                    {title.displayName}
                </h2>
            </button>
        </>
    )
}