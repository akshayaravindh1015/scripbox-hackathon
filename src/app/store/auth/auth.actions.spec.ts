import * as AuthActions from './auth.actions';

describe('Auth', () => {
  it('should create an instance', () => {
    expect(new AuthActions.Login()).toBeTruthy();
  });

  it('should create an instance', () => {
    expect(new AuthActions.LogOut().type).toBe(
      '[Auth] LogOut',
      'Wrong type in Auth Actions'
    );
  });
});
