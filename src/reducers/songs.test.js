import * as Types from '../actiontypes/singer';
import reducer from '../reducers/songs';

describe('Singer\'s song queue reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual([])
    });

    it('should add a song to the queue', () => {
        
    });
});