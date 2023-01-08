import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmnetiesComponent } from './amneties/amneties.component';
import { CommentsComponent } from './comments/comments.component';
import { CanactivateGuard } from './guards/canactivate.guard';
import { CandeactivateGuard } from './guards/candeactivate.guard';
import { CanloadGuard } from './guards/canload.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductdetailsbyqueryComponent } from './productdetailsbyquery/productdetailsbyquery.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

const routes: Routes = [
  {path: 'home', component: TemplatedrivenformComponent, canActivate : [CanactivateGuard]},
  {path: 'comments', component: CommentsComponent, canDeactivate : [CandeactivateGuard]},
  {path: 'products', component: AmnetiesComponent},
  {path: 'productdetails/:id', component: ProductdetailsComponent},
  {path: 'productdetailbyqueryparam', component: ProductdetailsbyqueryComponent},
  { path: 'reservationcomp', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule), canLoad: [CanloadGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
