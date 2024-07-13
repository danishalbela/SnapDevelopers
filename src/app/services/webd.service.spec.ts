import { TestBed } from '@angular/core/testing';

import { WebdService } from './webd.service';

describe('WebdService', () => {
  let service: WebdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
