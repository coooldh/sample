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
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var app_service_1 = require('./app.service');
var ListComponent = (function () {
    function ListComponent(lawService) {
        this.lawService = lawService;
    }
    ListComponent.prototype.ngOnInit = function () { this.getInitList("0"); };
    ListComponent.prototype.getInitList = function (offset) {
        var _this = this;
        this.lawService.getList(offset)
            .subscribe(function (list) { return _this.articles = list; }, function (error) { return _this.errorMessage = error; });
        console.log(this.articles);
    };
    ListComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '/js/app.list.html',
            providers: [app_service_1.LawService],
        }), 
        __metadata('design:paramtypes', [app_service_1.LawService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFHbEQsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiw0QkFBaUMsZUFBZSxDQUFDLENBQUE7QUFRakQ7SUFNSSx1QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUMxQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUixjQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXJDLG1DQUFXLEdBQVgsVUFBWSxNQUFjO1FBQTFCLGlCQVFDO1FBTkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQ3BCLFNBQVMsQ0FDUixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFwQixDQUFvQixFQUM1QixVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLEdBQWE7UUFDN0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUcsQ0FBQztJQUMxQixDQUFDO0lBN0JQO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBRSxDQUFFLHdCQUFVLENBQUU7U0FDNUIsQ0FBQzs7cUJBQUE7SUEwQkYsb0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHFCQUFhLGdCQXlCekIsQ0FBQSIsImZpbGUiOiJhcHAubGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBMYXdTZXJ2aWNlIH0gICAgICAgZnJvbSAnLi9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBBcnRpY2xlIH0gICAgICAgZnJvbSAnLi9hcnRpY2xlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy9qcy9hcHAubGlzdC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFsgTGF3U2VydmljZSBdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBhcnRpY2xlcyA6IEFydGljbGVbXTtcbiAgICBhcnRpY2xlIDogQXJ0aWNsZTtcbiAgICByZXN1bHQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhd1NlcnZpY2U6IExhd1NlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgdGhpcy5nZXRJbml0TGlzdChcIjBcIik7IH1cblxuICAgIGdldEluaXRMaXN0KG9mZnNldDogc3RyaW5nKSB7XG5cbiAgICAgICB0aGlzLmxhd1NlcnZpY2UuZ2V0TGlzdChvZmZzZXQpXG4gICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgbGlzdCA9PiB0aGlzLmFydGljbGVzID0gbGlzdCxcbiAgICAgICAgICAgICAgICAgICBlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJ0aWNsZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XG4gICAgICAgIHJldHVybiBib2R5LmRhdGEgfHwgeyB9O1xuICAgICAgfVxufVxuIl19
