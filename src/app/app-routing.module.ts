import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component'

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

// forRoot()メソッドは、ルーティングに必要なサービス・プロバイダとディレクティブを提供し、
// ブラウザの現在のURLをもとに最初の遷移を行う。
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // AppRoutingModuleは、RouterModuleをエクスポートし、アプリ全体で利用できるようにする
  exports: [RouterModule]
})
export class AppRoutingModule { }
