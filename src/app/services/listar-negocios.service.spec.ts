import { TestBed, inject } from '@angular/core/testing';

import { ListarNegociosService } from './listar-negocios.service';

describe('ListarNegociosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarNegociosService]
    });
  });

  it('should be created', inject([ListarNegociosService], (service: ListarNegociosService) => {
    expect(service).toBeTruthy();
  }));
});
