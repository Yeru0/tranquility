import { TestBed } from '@angular/core/testing';

import { ForgotPasswordEmailService } from './forgot-password-email.service';

describe('ForgotPasswordEmailService', () => {
  let service: ForgotPasswordEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotPasswordEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
