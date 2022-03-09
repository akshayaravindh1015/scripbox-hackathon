import { login } from '.';
import { authReducer, initialState } from './auth.reducer';

describe('Auth Reducer', () => {
  it('an unknown action should return the previous state', () => {
    const action = {} as any;

    const result = authReducer(initialState, action);

    expect(result).toBe(initialState);
  });
  it('an login action should return the login state', () => {
    const result = authReducer(initialState, login);

    expect(result.isLoggedIn).toBe(true, 'Logging In failed.');
  });
});
