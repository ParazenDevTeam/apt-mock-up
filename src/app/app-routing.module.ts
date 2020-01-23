import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';


const routes: Routes = [
  {
    path: 'search',
    component: SearchPageComponent,
    pathMatch: 'full',
    data: { title: 'Search' }
  },
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full',
    data: { title: 'Home Page' }
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
