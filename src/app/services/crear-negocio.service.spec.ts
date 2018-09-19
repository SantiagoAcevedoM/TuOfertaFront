import { TestBed, inject } from '@angular/core/testing';

import { CrearNegocioService } from './crear-negocio.service';

describe('CrearNegocioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearNegocioService]
    });
  });

  it('should be created', inject([CrearNegocioService], (service: CrearNegocioService) => {
    expect(service).toBeTruthy();
  }));
});
