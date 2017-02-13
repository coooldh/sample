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
var app_notfound_1 = require('./app.notfound');
var appRoutes = [
    { path: 'compose', component: app_detail_1.DetailComponent },
    { path: '', component: app_list_1.ListComponent },
    { path: '**', component: app_notfound_1.PageNotFoundComponent }
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
                app_component_1.AppComponent,
                app_notfound_1.PageNotFoundComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBK0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUNoRCx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFFeEQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MseUJBQThCLFlBQVksQ0FBQyxDQUFBO0FBQzNDLDJCQUFnQyxjQUFjLENBQUMsQ0FBQTtBQUMvQyw2QkFBc0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUV2RCxJQUFNLFNBQVMsR0FBVztJQUN4QixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDRCQUFlLEVBQUU7SUFDL0MsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSx3QkFBYSxFQUFFO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsb0NBQXFCLEVBQUU7Q0FDakQsQ0FBQztBQWtCRjtJQUFBO0lBQXlCLENBQUM7SUFoQjFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGdDQUFhO2dCQUNiLG1CQUFXO2dCQUNYLGlCQUFVO2dCQUNWLGtCQUFXO2dCQUNYLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRTtnQkFDWix3QkFBYTtnQkFDYiw0QkFBZTtnQkFDZiw0QkFBWTtnQkFDWixvQ0FBcUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsQ0FBRSw0QkFBWSxDQUFDO1NBQzNCLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSAsIFJvdXRlc30gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSnNvbnBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2FwcC5saXN0JztcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmRldGFpbCc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL2FwcC5ub3Rmb3VuZCc7XG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICdjb21wb3NlJywgY29tcG9uZW50OiBEZXRhaWxDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBQYWdlTm90Rm91bmRDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBKc29ucE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExpc3RDb21wb25lbnQsXG4gICAgRGV0YWlsQ29tcG9uZW50LFxuICAgIEFwcENvbXBvbmVudCxcbiAgICBQYWdlTm90Rm91bmRDb21wb25lbnRcbiAgXSxcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
