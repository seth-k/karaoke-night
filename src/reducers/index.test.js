import rootReducer from '../reducers';

describe('root reducer', () => {
    it('should return the initial state', () => {
        expect(rootReducer(undefined, {}))
            .toEqual({ singers: [] })
    });
});