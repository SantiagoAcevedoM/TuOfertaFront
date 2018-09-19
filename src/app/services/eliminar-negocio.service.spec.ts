import { TestBed, inject } from '@angular/core/testing';

import { EliminarNegocioService } from './eliminar-negocio.service';

describe('EliminarNegocioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EliminarNegocioService]
    });
  });

  it('should be created', inject([EliminarNegocioService], (service: EliminarNegocioService) => {
    expect(service).toBeTruthy();
  }));
});
