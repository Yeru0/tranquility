import { TestBed } from '@angular/core/testing';

import { EmailAndPasswordService } from './email-and-password.service';

describe('EmailAndPasswordService', () => {
  let service: EmailAndPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailAndPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
