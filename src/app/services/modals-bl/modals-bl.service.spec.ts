import { TestBed } from '@angular/core/testing';

import { ModalsBlService } from './modals-bl.service';

describe('ModalsBlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalsBlService = TestBed.get(ModalsBlService);
    expect(service).toBeTruthy();
  });
});
