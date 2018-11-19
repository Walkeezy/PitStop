import vehicleReducer from './vehicle';

describe('auth vehicle reducer', () => {
    it('should return the initial state', () => {
        expect(vehicleReducer(undefined, {})).toEqual({
            loading: true,
            vehicles: {},
            activeVehicle: ''
        });
    });
});