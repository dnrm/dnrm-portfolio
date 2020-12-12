import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { BlogdannermmcomComponent } from './components/blogdannermmcom/blogdannermmcom.component';
import { DanielmedinadevComponent } from './components/danielmedinadev/danielmedinadev.component';
import { DannermmWebsiteComponent } from './components/dannermm-website/dannermm-website.component';
import { HomePageArchiveComponent } from './components/home-page-archive/home-page-archive.component';

import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent, children: [
    {path: 'danielmedina-dev', component: DanielmedinadevComponent},
    {path: 'blog-dannermm-com', component: BlogdannermmcomComponent},
    {path: 'dannermm-com', component: DannermmWebsiteComponent},
    {path: 'admin-panel', component: AdminPanelComponent},
    {path: 'home-page-archive', component: HomePageArchiveComponent}
  ]},
  {path: '**', redirectTo: ''}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
