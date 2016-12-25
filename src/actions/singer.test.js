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
});