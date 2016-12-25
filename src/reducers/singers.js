import * as Types from '../actiontypes/singer'


const initialState = [
  { name: "S.S.S", songs: []},
  { name: "Jix", songs: []},
  { name: "Larz", songs: []},
];

export default function singers(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_SINGER:
            return [
                ...state,
                { name: action.name, songs: [] }
            ]

        default:
            return state;
    }
}
