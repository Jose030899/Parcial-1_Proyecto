import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ColorsComponent } from './components/colors/colors.component';
import { BorderComponent } from './components/border/border.component';
import { AnimationComponent } from './components/animation/animation.component';
import { OtherComponent } from './components/other/other.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BlankComponent } from './components/blank/blank.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TablesComponent } from './components/tables/tables.component';

const APP_ROUTES: Routes = [{path: 'dashboard', component: DashboardComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'colors', component: ColorsComponent},
  {path: 'borders', component: BorderComponent},
  {path: 'animation', component: AnimationComponent},
  {path: 'other', component: OtherComponent},
  {path: '404', component: PagenotfoundComponent},
  {path: 'blank', component: BlankComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'tables', component: TablesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'dashboard'}
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
