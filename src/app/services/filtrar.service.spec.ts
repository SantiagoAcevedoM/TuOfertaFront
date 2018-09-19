import { TestBed, inject } from '@angular/core/testing';

import { FiltrarService } from './filtrar.service';

describe('FiltrarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiltrarService]
    });
  });

  it('should be created', inject([FiltrarService], (service: FiltrarService) => {
    expect(service).toBeTruthy();
  }));
});
