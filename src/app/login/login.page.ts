import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importa AlertController
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = ''; // Propiedad para almacenar el valor del campo de usuario
  contrasena: string = ''; // Propiedad para almacenar el valor del campo de usuario
  constructor(private router: Router, private alertController: AlertController) { }



  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    

    await alert.present();
  }

  async mostrarAlertaExito() {
    const alert = await this.alertController.create({
      header: 'Inicio de Sesión Exitoso',
      message: '¡Bienvenido, '+this.usuario+'!',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  iniciarSesion(usuario: string, contraseña: string) {
    if (usuario === 'docente' && contraseña === 'docente') {
      
      this.router.navigate(['/homeprofesor']);
      this.mostrarAlertaExito();
    } else if (usuario === 'alumno' && contraseña === 'alumno') {
      
      this.router.navigate(['/home']);
      this.mostrarAlertaExito();
    } else {
      
      this.mostrarAlerta('Error', 'Usuario o contraseña incorrectos.');
    }
  }
  

  ngOnInit() {
  }

}
