import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ProjectComponent } from './components/project/project.component';
import { RandomComponent } from './components/random/random.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: RandomComponent},
  {path: 'projects', component: MainComponent},
  {path: 'random', component: RandomComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
