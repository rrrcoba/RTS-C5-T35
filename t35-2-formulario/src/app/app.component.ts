import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 't35-2-formulario';

  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  checkBot: string = '';
  registros: Array<object> = [];

  warning1: string = '';
  warning2: string = '';
  warning3: string = '';
  warning4: string = '';

  saveRegister() {
    if (this.nombre == '') {
        this.warning1 = 'Introduzca su nombre y apellido';
    } else {
      if (this.email == '') {
        this.warning2 = 'Introduzca un email válido';
        this.warning1 = '';
      } else {
        if (this.mensaje == '') {
          this.warning3 = 'Introduzca un mensaje';
          this.warning1 = '';
          this.warning2 = '';
        } else {
          if (this.checkBot != '5') {
            this.warning4 = 'Validación anti-spam incorrecta';
            this.warning1 = '';
            this.warning2 = '';
            this.warning3 = '';
          } else {
            this.warning1 = '';
            this.warning2 = '';
            this.warning3 = '';
            this.warning4 = '';

            this.registros.push({
              nombre: this.nombre,
              email: this.email,
              mensaje: this.mensaje});
          }
        }
      }
    }
  }

}
