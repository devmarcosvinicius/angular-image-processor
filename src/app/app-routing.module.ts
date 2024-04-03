import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ToolsComponent} from "./pages/tools/tools.component";
import {BrightnessToolComponent} from "./pages/tools/brightness-tool/brightness-tool.component";
import {DocumentationComponent} from "./pages/documentation/documentation.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'tools', component: ToolsComponent, pathMatch: 'full'},
  {path: 'tools/brightness', component: BrightnessToolComponent, pathMatch: 'full'},
  {path: 'documentation', component: DocumentationComponent, pathMatch: "full"},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
