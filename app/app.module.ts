import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule , Routes}   from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './app.list';
import { DetailComponent } from './app.detail';

const appRoutes: Routes = [
  { path: 'detail', component: DetailComponent },
  { path: 'list', component: ListComponent },
  { path: '',   redirectTo: '/list', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ListComponent,
    DetailComponent,
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
