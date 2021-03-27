import { TestBed } from '@angular/core/testing';

import { StackExchnageService } from './stack-exchnage.service';

describe('StackExchnageService', () => {
  let service: StackExchnageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackExchnageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
