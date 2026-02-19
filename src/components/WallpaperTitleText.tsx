import type { WallpaperTitle } from "../lib/types"

type WallpaperTitleTextProps = {
    title: WallpaperTitle;
    isActive:boolean;
    onClick: (value: string) => void;
}

export const WallpaperTitleText = ({title, isActive, onClick}:WallpaperTitleTextProps) => {
    return(
        <>
            <button 
            className={`
                bg-transparent uppercase 
                ${isActive ? 'text-zinc-100' : 'text-zinc-600 hover:text-zinc-400'} 
                text-nowrap
                focus:outline-2 focus:outline-zinc-50 focus:outline-offset-4
                `} 
            onClick={()  => onClick(title.id)}
            >
                <h2>
                    {title.displayName}
                </h2>
            </button>
        </>
    )
}