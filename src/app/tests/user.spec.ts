import { User } from '../modules/user/user';
import { UserGroup } from '../models/user-group';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('', '', '','',new UserGroup(' ', ' ', ' ', ' '))).toBeTruthy();
  });
});
