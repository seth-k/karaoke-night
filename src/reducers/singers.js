import * as Types from '../actiontypes/singer'

export default function singers(state = [], action) {
    switch (action.type) {
        case Types.ADD_SINGER:
            return [
                ...state,
                { name: action.name, songs: [] }
            ];

        case Types.NEXT_SINGER:
            if(state.length > 0) {
                return [
                    ...state.slice(1),
                    state[0]
                ];
            }
            return state;

        case Types.ADD_SONG:
            return state.map((singer, index) => {
                if(index === action.index) {
                    singer.songs.push(action.song);
                }
                return singer
            });
        default:
            return state;
    }
}
