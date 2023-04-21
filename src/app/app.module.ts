import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsuariosRegistrarComponent } from './components/usuarios-registrar/usuarios-registrar.component';
import { UsuariosListarComponent } from './components/usuarios-listar/usuarios-listar.component';
import { VistaComponent } from './components/vista/vista.component';
import { UsuariosIngresarComponent } from './components/usuarios-ingresar/usuarios-ingresar.component';
import { UsuariosService } from './services/usuarios.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuariosRegistrarComponent,
    UsuariosListarComponent,
    VistaComponent,
    UsuariosIngresarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsuariosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
