import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  listaAlumnos: Array<Alumno> = [
    { nombre: 'Esteban', apellido: 'Roganti', esProfesional: true, nota: 6 },
    { nombre: 'Juan', apellido: 'Lopez', esProfesional: true, nota: 3 },
    { nombre: 'Jose', apellido: 'Gomez', esProfesional: false, nota: 5 },
    { nombre: 'Julio', apellido: 'Perez', esProfesional: true, nota: 9 },
    { nombre: 'Nahuel', apellido: 'Bruno', esProfesional: true, nota: 10 },
    { nombre: 'Lorena', apellido: 'Fuentes', esProfesional: true, nota: 8 },
    { nombre: 'Luciana', apellido: 'Nieto', esProfesional: false, nota: 2 },
    { nombre: 'Marcio', apellido: 'Cena', esProfesional: false, nota: 1 },
    { nombre: 'Marcelo', apellido: 'Peron', esProfesional: true, nota: 5 },
    { nombre: 'Martin', apellido: 'Guillen', esProfesional: true, nota: 4 },
    { nombre: 'Carlos', apellido: 'Oliveros', esProfesional: true, nota: 6 },
    { nombre: 'Milton', apellido: 'Paviolo', esProfesional: true, nota: 7 },
    { nombre: 'Fernanda', apellido: 'Gentili', esProfesional: false, nota: 7 },
    { nombre: 'Fiamma', apellido: 'Alladio', esProfesional: false, nota: 7 },
    { nombre: 'Gabriela', apellido: 'Dusso', esProfesional: false, nota: 6 },
    { nombre: 'Julieta', apellido: 'Dagatti', esProfesional: true, nota: 8 },
    { nombre: 'Raquel', apellido: 'Pussetto', esProfesional: true, nota: 8 },
    { nombre: 'Pedro', apellido: 'Gonzalez', esProfesional: true, nota: 9 },
    { nombre: 'Pablo', apellido: 'Diaz', esProfesional: true, nota: 9 },
    { nombre: 'Vanesa', apellido: 'Russo', esProfesional: false, nota: 2 },
    { nombre: 'Nancy', apellido: 'Allende', esProfesional: true, nota: 2 },
    { nombre: 'Roberto', apellido: 'Maldonado', esProfesional: false, nota: 7 },
    { nombre: 'Matias', apellido: 'Medrano', esProfesional: true, nota: 7 },
    { nombre: 'Guillermo', apellido: 'Ambrosio', esProfesional: false, nota: 8 },
    { nombre: 'Romina', apellido: 'Olea', esProfesional: true, nota: 8 },
    { nombre: 'Andrea', apellido: 'Sanchez', esProfesional: false, nota: 8 },
    { nombre: 'Claudia', apellido: 'Macagno', esProfesional: true, nota: 4 },
    { nombre: 'Agustina', apellido: 'Betini', esProfesional: true, nota: 4 },
    { nombre: 'Noelia', apellido: 'Delgado', esProfesional: true, nota: 3 },
    { nombre: 'Rocio', apellido: 'Dominguez', esProfesional: false, nota: 10 },
    { nombre: 'Rodrigo', apellido: 'Zarate', esProfesional: false, nota: 10 },
    { nombre: 'Rosalia', apellido: 'Manelli', esProfesional: false, nota: 8 },
    { nombre: 'Ruben', apellido: 'Antonino', esProfesional: false, nota: 5 },
    { nombre: 'Lucas', apellido: 'Peretti', esProfesional: false, nota: 6 },
    { nombre: 'Liliana', apellido: 'Catalano', esProfesional: true, nota: 7 },
    { nombre: 'Rogelio', apellido: 'Moreyra', esProfesional: true, nota: 4 },
    { nombre: 'Antonio', apellido: 'Acebedo', esProfesional: false, nota: 4 },
    { nombre: 'Ayelen', apellido: 'Godoy', esProfesional: true, nota: 7 },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }


}
