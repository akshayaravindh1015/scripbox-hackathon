import * as fromAuth from './auth.actions';

describe('loadAuths', () => {
  it('should create an instance', () => {
    expect(fromAuth.login()).toBeTruthy();
  });

  it('should return an action', () => {
    expect(fromAuth.logOut().type).toBe(
      '[Auth] LogOut',
      'Wrong type in Auth Actions'
    );
  });
});
