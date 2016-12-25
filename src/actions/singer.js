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