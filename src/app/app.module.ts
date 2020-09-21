import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ColorsComponent } from './components/colors/colors.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BorderComponent } from './components/border/border.component';
import { AnimationComponent } from './components/animation/animation.component';
import { OtherComponent } from './components/other/other.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BlankComponent } from './components/blank/blank.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TablesComponent } from './components/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    FooterComponent,
    BorderComponent,
    AnimationComponent,
    OtherComponent,
    PagenotfoundComponent,
    BlankComponent,
    ChartsComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
