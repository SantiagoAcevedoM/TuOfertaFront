import { TestBed, inject } from '@angular/core/testing';

import { ListarNegocioService } from './listar-negocio.service';

describe('ListarNegocioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarNegocioService]
    });
  });

  it('should be created', inject([ListarNegocioService], (service: ListarNegocioService) => {
    expect(service).toBeTruthy();
  }));
});
