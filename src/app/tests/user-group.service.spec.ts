import { TestBed } from '@angular/core/testing';

import { UserGroupService } from '../services/user-group.service';

describe('UserGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserGroupService = TestBed.get(UserGroupService);
    expect(service).toBeTruthy();
  });
});
