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
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_list_1 = require('./app.list');
var app_detail_1 = require('./app.detail');
var appRoutes = [
    { path: 'detail', component: app_detail_1.DetailComponent },
    { path: '', component: app_list_1.ListComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBK0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUNoRCx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFFeEQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MseUJBQThCLFlBQVksQ0FBQyxDQUFBO0FBQzNDLDJCQUFnQyxjQUFjLENBQUMsQ0FBQTtBQUUvQyxJQUFNLFNBQVMsR0FBVztJQUN4QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLDRCQUFlLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSx3QkFBYSxFQUFFO0NBR3ZDLENBQUM7QUFpQkY7SUFBQTtJQUF5QixDQUFDO0lBZjFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGdDQUFhO2dCQUNiLG1CQUFXO2dCQUNYLGlCQUFVO2dCQUNWLGtCQUFXO2dCQUNYLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRTtnQkFDWix3QkFBYTtnQkFDYiw0QkFBZTtnQkFDZiw0QkFBWTthQUNiO1lBQ0QsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBQztTQUMzQixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgLCBSb3V0ZXN9ICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEpzb25wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9hcHAubGlzdCc7XG5pbXBvcnQgeyBEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2FwcC5kZXRhaWwnO1xuXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnZGV0YWlsJywgY29tcG9uZW50OiBEZXRhaWxDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50IH0sXG4gIC8vIHsgcGF0aDogJycsICAgcmVkaXJlY3RUbzogJy9saXN0JywgcGF0aE1hdGNoOiAnZnVsbCcgfVxuICAvLyB7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgSnNvbnBNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMaXN0Q29tcG9uZW50LFxuICAgIERldGFpbENvbXBvbmVudCxcbiAgICBBcHBDb21wb25lbnRcbiAgXSxcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
