import { AuthActionTypes } from '.';
import { authReducer, initialState } from './auth.reducer';

describe('Auth Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = authReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('an login action', () => {
    it('should return the login state', () => {
      const action = { type: AuthActionTypes.LOGOUT } as any;

      const result = authReducer(initialState, action);

      expect(result.isLoggedIn).toBe(false, 'Logging Out failed.');
    });
  });
});
