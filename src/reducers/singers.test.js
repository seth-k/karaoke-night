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

    it('should remove the first song from the singer\'s queue when advancing to the next', () => {
        expect(
            reducer([
                { name: "Jix", songs: [ { title: "song1" }, { title: "song2"} ]},
                { name: "Seth", songs: [{ title: "song1b" }, { title: "song2b"}] },
                { name: "Al", songs: [{ title: "song1c" }, { title: "song2c"}] },   
            ], { type: Types.NEXT_SINGER })
        ).toEqual([
                { name: "Seth", songs: [{ title: "song1b" }, { title: "song2b"}] },
                { name: "Al", songs: [{ title: "song1c" }, { title: "song2c"}] },   
                { name: "Jix", songs: [{ title: "song2"}] },
            ]);
    });

    it('should add a song to the players queue', () => {
        expect(
            reducer([
                { name: "S.S.S", songs: [] },
            ], { type: Types.ADD_SONG, index: 0, song: {
            title: "Personal Jesus",
            artist: "Depeche Mode",
            vendor: "SC",
            uri: 'https://www.youtube.com/watch?v=XBQmrAG64WI'
        } })

        ).toEqual([
                { 
                    name: "S.S.S", 
                    songs: [{
                        title: "Personal Jesus",
                        artist: "Depeche Mode",
                        vendor: "SC",
                        uri: 'https://www.youtube.com/watch?v=XBQmrAG64WI'
                    }] 
                },
        ]);
    });
});