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
                let newState = [
                    ...state.slice(1),
                    state[0]
                ];
                if(state[0].songs.length > 0) {
                    newState[newState.length-1].songs = state[0].songs.slice(1)
                }
                return newState;
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
