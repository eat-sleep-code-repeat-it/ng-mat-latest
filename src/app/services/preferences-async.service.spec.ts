import { TestBed } from '@angular/core/testing';

import { PreferencesAsyncService } from './preferences-async.service';

describe('PreferencesAsyncService', () => {
  let service: PreferencesAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferencesAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
