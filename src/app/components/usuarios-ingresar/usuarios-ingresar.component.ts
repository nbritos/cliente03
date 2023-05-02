import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-ingresar',
  templateUrl: './usuarios-ingresar.component.html',
  styleUrls: ['./usuarios-ingresar.component.css']
})

export class UsuariosIngresarComponent {

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.setToken();
  }
}
