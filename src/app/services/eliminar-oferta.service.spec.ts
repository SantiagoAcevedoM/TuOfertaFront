import { TestBed, inject } from '@angular/core/testing';

import { EliminarOfertaService } from './eliminar-oferta.service';

describe('EliminarOfertaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EliminarOfertaService]
    });
  });

  it('should be created', inject([EliminarOfertaService], (service: EliminarOfertaService) => {
    expect(service).toBeTruthy();
  }));
});
