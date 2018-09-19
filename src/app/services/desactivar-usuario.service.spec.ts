import { TestBed, inject } from '@angular/core/testing';

import { DesactivarUsuarioService } from './desactivar-usuario.service';

describe('DesactivarUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesactivarUsuarioService]
    });
  });

  it('should be created', inject([DesactivarUsuarioService], (service: DesactivarUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
