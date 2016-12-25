import * as Types from '../actiontypes/singer';
import reducer from '../reducers/singers';

describe('singer reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual([
                { name: "S.S.S", songs: []},
                { name: "Jix", songs: []},
                { name: "Larz", songs: []},
            ])
    });

    it('should handle ADD_SINGER', () => {
        expect(
            reducer([], { type: Types.ADD_SINGER, name: "Al"})
        ).toEqual([ { name: "Al", songs: []} ]);
    });
});