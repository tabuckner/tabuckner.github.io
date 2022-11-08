import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioModule } from './portfolio/portfolio.module';


const routes: Routes = [
  { path: '', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PortfolioModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
