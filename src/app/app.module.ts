import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';


const routes = [
  { path: "log-reg", component: LogRegComponent },
  { path: "map", component: MapComponent },
  { path: "", pathMatch: "full", redirectTo: "/log-reg" }
];

@NgModule({
  declarations: [
    AppComponent,
    LogRegComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{ useHash: true}),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
