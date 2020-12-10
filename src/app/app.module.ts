import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RandomComponent } from './components/random/random.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectComponent } from './components/project/project.component';
import { DanielmedinadevComponent } from './components/danielmedinadev/danielmedinadev.component';
import { BlogdannermmcomComponent } from './components/blogdannermmcom/blogdannermmcom.component';
import { DannermmWebsiteComponent } from './components/dannermm-website/dannermm-website.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HomePageArchiveComponent } from './components/home-page-archive/home-page-archive.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RandomComponent,
    FooterComponent,
    ProjectComponent,
    DanielmedinadevComponent,
    BlogdannermmcomComponent,
    DannermmWebsiteComponent,
    AdminPanelComponent,
    HomePageArchiveComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
