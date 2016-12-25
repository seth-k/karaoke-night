import * as Types from '../actiontypes/singer';

export const addSinger = name => {
    return {
        type: Types.ADD_SINGER,
        name
    };
}

export const nextSinger = () => {
    return {
        type: Types.NEXT_SINGER
    };
}

export const addSong = (index, song) => {
    return {
            type: Types.ADD_SONG,
            index,
            song
    }
}

export const displaySongsFor = (index) => {
    return {
        type: Types.DISPLAY_SONGS,
        index
    }
}

export const hideSongs = () => {
    return { type: Types.HIDE_SONGS };
}