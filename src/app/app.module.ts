import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// ng generate 以外で作成する場合、ここでimport配列に「AppRoutingModule」を追加する必要あり
import { AppRoutingModule }    from './app-routing.module';
import { AppComponent }        from './app.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent }   from './messages/messages.component';
import { DashboardComponent }  from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
