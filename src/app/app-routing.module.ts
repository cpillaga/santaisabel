import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AguaComponent } from './pages/serviciosB/agua/agua.component';
import { LuzComponent } from './pages/serviciosB/luz/luz.component';
import { TelefonoComponent } from './pages/serviciosB/telefono/telefono.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios/agua', component: AguaComponent },
  { path: 'servicios/luz', component: LuzComponent },
  { path: 'servicios/telefono', component: TelefonoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
