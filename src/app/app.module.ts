import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { BrightnessToolComponent } from './pages/tools/brightness-tool/brightness-tool.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstSectionComponent } from './components/home/first-section/first-section.component';
import { ToolsSectionComponent } from './components/home/tools-section/tools-section.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { ImageTextCardComponent } from './components/cards/image-text-card/image-text-card.component';
import { RightImageCardComponent } from './components/cards/right-image-card/right-image-card.component';
import { LeftImageCardComponent } from './components/cards/left-image-card/left-image-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolsFirstSectionComponent } from './components/tools/tools-first-section/tools-first-section.component';
import { UploadBoxComponent } from './components/upload-box/upload-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolsComponent,
    BrightnessToolComponent,
    DocumentationComponent,
    NavbarComponent,
    FirstSectionComponent,
    ToolsSectionComponent,
    SectionHeaderComponent,
    ImageTextCardComponent,
    RightImageCardComponent,
    LeftImageCardComponent,
    FooterComponent,
    ToolsFirstSectionComponent,
    UploadBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
