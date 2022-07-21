import { TestBed } from '@angular/core/testing';

import { EmailOnlyService } from './email-only.service';

describe('EmailOnlyService', () => {
  let service: EmailOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
