import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AppModule } from './app.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { componentFactoryName } from '@angular/compiler';
import { CommonnavCompComponent } from './components/commonnav-comp/commonnav-comp.component';


const routes: Routes = [
  {path: 'Admin',
  component: AdminComponent},
  {path: '',
   children: [
    { path: 'home', component: HomeComponent},{
      path: 'details', component: DetailsComponent
    }
    ], component: CommonnavCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
