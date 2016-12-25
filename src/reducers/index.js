import { combineReducers } from 'redux';
import singers from './singers';
import displaySongQueue from './displaySongQueue'

const rootReducer = combineReducers({
    singers,
    displaySongQueue
});

export default rootReducer;