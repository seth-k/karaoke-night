import * as Types from '../actiontypes/singer';
import reducer from '../reducers/singers';

describe('singer reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual([])
    });

    it('should handle ADD_SINGER', () => {
        expect(
            reducer([], { type: Types.ADD_SINGER, name: "Al"})
        ).toEqual([ { name: "Al", songs: []} ]);
    });

    it('should advance the queue and drop the current singer to the bottom for the next performance', () => {
        expect(
            reducer([
                { name: "Jix", songs: [] },
                { name: "Seth", songs: [] },
                { name: "Al", songs: [] },   
            ], { type: Types.NEXT_SINGER })
        ).toEqual([
                { name: "Seth", songs: [] },
                { name: "Al", songs: [] },   
                { name: "Jix", songs: [] },
            ]);
    });

    it('should handle advancing a single singer queue', () => {
        expect(
            reducer([
                { name: "Jix", songs: [] },
            ], { type: Types.NEXT_SINGER })
        ).toEqual([
                { name: "Jix", songs: [] },
            ]);
    });

    it('should handle advancing an empty queue without crashing', () => {
        expect(
            reducer( [], { type: Types.NEXT_SINGER })
        ).toEqual([]);
    });
});