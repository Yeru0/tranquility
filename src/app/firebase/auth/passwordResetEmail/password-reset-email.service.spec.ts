import { TestBed } from '@angular/core/testing';

import { PasswordResetEmailService } from './password-reset-email.service';

describe('PasswordResetEmailService', () => {
  let service: PasswordResetEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordResetEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
