import { UserGroup } from '../models/user-group';

describe('UserGroup', () => {
  it('should create an instance', () => {
    expect(new UserGroup(1,"name"," "," ")).toBeTruthy();
  });
});
