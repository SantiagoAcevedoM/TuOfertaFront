import { TestBed, inject } from '@angular/core/testing';

import { EliminarUsuarioService } from './eliminar-usuario.service';

describe('EliminarUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EliminarUsuarioService]
    });
  });

  it('should be created', inject([EliminarUsuarioService], (service: EliminarUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
