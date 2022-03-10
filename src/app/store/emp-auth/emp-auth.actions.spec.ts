import * as fromAuth from './emp-auth.actions';

describe('loadAuths', () => {
  // it('should create an instance', () => {
  //   expect(fromAuth.login({ empId: 'Dummy UserName' })).toBeTruthy();
  // });

  it('should return an action', () => {
    expect(fromAuth.logOut().type).toBe(
      '[Emp-Auth] LogOut',
      'Wrong type in Auth Actions'
    );
  });
});
