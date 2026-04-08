export type WallpaperTitle = {
    readonly id: string;
    displayName: string;
}

export type WallpaperEntry ={
    readonly id: string;
    readonly displayName: string;
    readonly src: string;
    readonly backupCol: string;
}

export type WallpaperLibrary = Readonly<Record<string, ReadonlyArray<WallpaperEntry>>>;