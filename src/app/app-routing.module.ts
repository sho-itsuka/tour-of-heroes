import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }     from './heroes/heroes.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: ''          , redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes'    , component: HeroesComponent },
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

// forRoot()メソッドは、ルーティングに必要なサービス・プロバイダとディレクティブを提供し、
// ブラウザの現在のURLをもとに最初の遷移を行う。
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  // AppRoutingModuleは、RouterModuleをエクスポートし、アプリ全体で利用できるようにする
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
