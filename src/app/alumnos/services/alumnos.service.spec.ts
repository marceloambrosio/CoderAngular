import { TestBed } from '@angular/core/testing';

import { AlumnosService } from './alumnos.service';

describe('ListaAlumnosService', () => {
  let service: AlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});