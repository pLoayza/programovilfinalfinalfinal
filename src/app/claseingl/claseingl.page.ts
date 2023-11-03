import { Component } from '@angular/core';
import { TeacherService } from '../services/api.service';
import { Teacher } from '../models/profesores';
import { curso } from '../models/cursos';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-claseingl',
  templateUrl: './claseingl.page.html',
  styleUrls: ['./claseingl.page.scss'],
})
export class ClaseinglPage {

  teachers: Teacher[] = [];
  cursos: curso[] = [];

  constructor(private teacherService: TeacherService) { 
    this.getTeachers();
} ngOnInit() {
  this.getTeachers();
  this.getCursos(); // Obtener los cursos al cargar la página
}

getTeachers(): void {
  /* this.teacherService.getTeachers().subscribe(teachers => this.teachers = teachers); */
  this.teacherService.getTeachers().subscribe(
    teachers => {
      this.teachers = teachers;
    },
    error => {
      console.error('Error en la solicitud HTTP:', error);
    }
  );
};


getCursos(): void {
  this.teacherService.getCursos().subscribe(
    cursos => {
      this.cursos = cursos;
    },
    error => {
      console.error('Error en la solicitud HTTP:', error);
    }
  );

  // Other methods to add and list teachers...
}

  }
  