import { TestBed } from '@angular/core/testing';

import { EmpluseService } from './empluse.service';

describe('EmpluseService', () => {
  let service: EmpluseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpluseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
