import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Apartado1Component } from './apartado1/apartado1.component';
import { Apartado2Component } from './apartado2/apartado2.component';
import { Apartado3Component } from './apartado3/apartado3.component';
import { Apartado4Component } from './apartado4/apartado4.component';


const routes: Routes = [




  {path: 'apartado1', component: Apartado1Component},
  {path: 'apartado2', component: Apartado2Component},
  {path: 'apartado3', component: Apartado3Component},  
  {path: 'apartado4', component: Apartado4Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
