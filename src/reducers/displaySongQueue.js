import * as Types from '../actiontypes/singer'

export default function displaySongQueue(state = -1, action) {
    switch (action.type) {
        case Types.DISPLAY_SONGS:
            return action.index;
        
        case Types.HIDE_SONGS:
            return -1;
            
        default:
            return state;
    }
}