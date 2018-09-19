import { TestBed, inject } from '@angular/core/testing';

import { EditarOfertaService } from './editar-oferta.service';

describe('EditarOfertaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditarOfertaService]
    });
  });

  it('should be created', inject([EditarOfertaService], (service: EditarOfertaService) => {
    expect(service).toBeTruthy();
  }));
});
