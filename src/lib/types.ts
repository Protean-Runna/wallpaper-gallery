export type WallpaperTitle = {
    id: string;
    displayName: string;
}

export type WallpaperEntry ={
    id: string;
    displayName: string;
    src: string;
}

export type WallpaperLibrary = Record<string, WallpaperEntry[]>;