import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule , Routes}   from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './app.list';
import { DetailComponent } from './app.detail';
import { PageNotFoundComponent } from './app.notfound';

const appRoutes: Routes = [
  { path: 'compose', component: DetailComponent },
  { path: '', component: ListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ListComponent,
    DetailComponent,
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
