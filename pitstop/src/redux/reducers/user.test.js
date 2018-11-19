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

    it('should store a user', () => {
        expect(userReducer({
            loading: true,
            authenticated: false,
            user: [],
            details: {
                firstname: '',
                lastname: ''
            }
        }, {
            type: 'SET_USER',
            loading: false,
            authenticated: true,
            user: 'some-user'
        })).toEqual({
            loading: false,
            authenticated: true,
            user: 'some-user',
            details: {
                firstname: '',
                lastname: ''
            }
        });
    })
});