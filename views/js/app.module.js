"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var app_list_1 = require('./app.list');
var app_detail_1 = require('./app.detail');
var appRoutes = [
    { path: 'detail', component: app_detail_1.DetailComponent },
    { path: 'list', component: app_list_1.ListComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            declarations: [
                app_list_1.ListComponent,
                app_detail_1.DetailComponent,
                app_component_1.AppComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBK0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUNoRCx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx5QkFBOEIsWUFBWSxDQUFDLENBQUE7QUFDM0MsMkJBQWdDLGNBQWMsQ0FBQyxDQUFBO0FBRS9DLElBQU0sU0FBUyxHQUFXO0lBQ3hCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsNEJBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHdCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFJLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtDQUV2RCxDQUFDO0FBZUY7SUFBQTtJQUF5QixDQUFDO0lBYjFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGdDQUFhO2dCQUNiLG1CQUFXO2dCQUNYLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRTtnQkFDWix3QkFBYTtnQkFDYiw0QkFBZTtnQkFDZiw0QkFBWTthQUNiO1lBQ0QsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtTQUM1QixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgLCBSb3V0ZXN9ICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2FwcC5saXN0JztcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmRldGFpbCc7XG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICdkZXRhaWwnLCBjb21wb25lbnQ6IERldGFpbENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdsaXN0JywgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogJycsICAgcmVkaXJlY3RUbzogJy9saXN0JywgcGF0aE1hdGNoOiAnZnVsbCcgfVxuICAvLyB7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTGlzdENvbXBvbmVudCxcbiAgICBEZXRhaWxDb21wb25lbnQsXG4gICAgQXBwQ29tcG9uZW50XG4gIF0sXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
