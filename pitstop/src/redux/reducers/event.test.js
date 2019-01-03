import eventReducer from './event';

describe('auth event reducer', () => {
    it('should return the initial state', () => {
        expect(eventReducer(undefined, {})).toEqual({
            loading: true,
            events: {},
            eventsArray: []
        });
    });
});