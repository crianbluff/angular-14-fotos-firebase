import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

//Rutas
import { APP_ROUTES } from './app.routes';

// Directivas
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

// Componentes
import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

// Servicios
import { CargaImagenesService } from './services/carga-imagenes.service';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent,
    NgDropFilesDirective
  ],

  imports: [
    BrowserModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],

  providers: [
    CargaImagenesService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }