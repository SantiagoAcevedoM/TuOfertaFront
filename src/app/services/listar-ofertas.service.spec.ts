import { TestBed, inject } from '@angular/core/testing';

import { ListarOfertasService } from './listar-ofertas.service';

describe('ListarOfertasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarOfertasService]
    });
  });

  it('should be created', inject([ListarOfertasService], (service: ListarOfertasService) => {
    expect(service).toBeTruthy();
  }));
});
