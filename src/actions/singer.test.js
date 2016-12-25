import * as actions from '../actions/singer'
import * as types from '../actiontypes/singer'

describe('Singer/singer queue actions', () => {
    it('should create an action to add a singer to the performance queue', () => {
        const name = "Al";
        const expectedAction = {
            type: types.ADD_SINGER,
            name
        }
        expect(actions.addSinger(name)).toEqual(expectedAction);
    });

    it('should create an action to advance the queue for the next performance', () => {
        const expectedAction = {
            type: types.NEXT_SINGER,
        }
        expect(actions.nextSinger(name)).toEqual(expectedAction);
    });

    it('should create an action to add a song to a singer\'s queue', () => {
        const index = 1;
        const song = {
            title: "Personal Jesus",
            artist: "Depeche Mode",
            vendor: "SC",
            uri: 'https://www.youtube.com/watch?v=XBQmrAG64WI'
        }
        const expectedAction = {
            type: types.ADD_SONG,
            index,
            song

        }
        expect(actions.addSong(index, song)).toEqual(expectedAction);
    });

    it('should create an action to display a singer\'s song queue', () => {
        const expectedAction = {
            type: types.DISPLAY_SONGS,
            index: 3,
        }
        expect(actions.displaySongsFor(3)).toEqual(expectedAction);
    })

    it('should create an action to hide the song queues', () => {
        const expectedAction = {
            type: types.HIDE_SONGS,
        }
        expect(actions.hideSongs()).toEqual(expectedAction);
    });
});