import { TestBed, inject } from '@angular/core/testing';

import { CrearOfertaService } from './crear-oferta.service';

describe('CrearOfertaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearOfertaService]
    });
  });

  it('should be created', inject([CrearOfertaService], (service: CrearOfertaService) => {
    expect(service).toBeTruthy();
  }));
});
