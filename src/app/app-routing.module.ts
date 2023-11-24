import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../feature/landing-page/landing-page.module').then(m => m.LandingPageModule),
    data: {
      animation: "HomeComponent"
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => import('../core/errors/not-found-404/not-found-404.module').then(m => m.NotFound404Module),
    data: {
      animation: "ErrorComponent"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
