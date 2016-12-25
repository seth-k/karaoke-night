import * as Types from '../actiontypes/singer';

export const addSinger = name => {
    return {
        type: Types.ADD_SINGER,
        name
    };
}