import { TestBed } from '@angular/core/testing';

import { ScriptControllerService } from './script-controller.service';

describe('ScriptControllerService', () => {
  let service: ScriptControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
