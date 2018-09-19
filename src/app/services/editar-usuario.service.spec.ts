import { TestBed, inject } from '@angular/core/testing';

import { EditarUsuarioService } from './editar-usuario.service';

describe('EditarUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditarUsuarioService]
    });
  });

  it('should be created', inject([EditarUsuarioService], (service: EditarUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
