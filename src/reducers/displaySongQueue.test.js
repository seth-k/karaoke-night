import * as Types from '../actiontypes/singer';
import reducer from '../reducers/displaySongQueue';

describe('displaySongQueue reducer', () => {
    it('returns the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual(-1);
    });

    it('DISPLAY_SONGS changes the index of the singer whose queue to display', () => {
        expect(reducer( -1, { type: Types.DISPLAY_SONGS, index: 3}))
            .toEqual(3);
    });

    it('HIDE_SONGS resets the index to -1 (don\'t display song queue on any singer)', () => {
        expect(reducer( 3, { type: Types.HIDE_SONGS}))
            .toEqual(-1);
    })
});