import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  {
    path : 'reactive-forms',
    component : ReactiveFormsComponent
  },
  {
    path: 'formData',
    loadChildren: () =>
      import('./form-data/form-data.module').then((m) => m.FormDataModule),
  },
  {
    path: 'displayData',
    loadChildren: () =>
      import('./display-data/display-data.module').then(
        (m) => m.DisplayDataModule
      ),
  },
  {path : 'rxjs', component : ObservablesComponent},
  {path : 'subject', component : SubjectsComponent},
  {path : 'contentProjection', component : ProductDashboardComponent},
  {
    path : '**',pathMatch : 'full', redirectTo : '/contentProjection'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
