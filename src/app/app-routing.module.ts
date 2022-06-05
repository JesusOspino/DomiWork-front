import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './components/detalles/detalles.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { ListaComponent } from './components/lista/lista.component';
import { MainComponent } from './components/main/main.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'lista',
    component: ListaComponent,
  },
  {
    path: 'detalles/:id',
    component: DetallesComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
