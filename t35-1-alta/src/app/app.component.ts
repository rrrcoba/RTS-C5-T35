import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 't35-1-alta';

  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: string = '';
  clientes: Array<object> = [];

  saveClient() {
      this.clientes.push({
        nombre: this.nombre,
        cif: this.cif,
        direccion: this.direccion,
        grupo: this.grupo});
  }
}
