import * as Types from '../actiontypes/singer'

export default function singers(state = [], action) {
    switch (action.type) {
        case Types.ADD_SINGER:
            return [
                ...state,
                { name: action.name, songs: [] }
            ];

        default:
            return state;
    }
}
