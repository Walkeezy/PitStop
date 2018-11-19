import userReducer from './user';

describe('auth user reducer', () => {
    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual({
            loading: true,
            authenticated: false,
            user: [],
            details: {
                firstname: '',
                lastname: ''
            }
        });
    });
});