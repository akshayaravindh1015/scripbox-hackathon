import { login } from '.';
import { empAuthReducer, initialEmpAuthState } from './emp-auth.reducer';

describe('Auth Reducer', () => {
  it('an unknown action should return the previous state', () => {
    const action = {} as any;

    const result = empAuthReducer(initialEmpAuthState, action);

    expect(result).toBe(initialEmpAuthState);
  });
  it('an login action should return the login state', () => {
    const result = empAuthReducer(initialEmpAuthState, login);

    expect(result.isLoggedIn).toBe(true, 'Logging In failed.');
  });
});
