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
        this.offset = 0;
        this.limit = 16;
    }
    ListComponent.prototype.ngOnInit = function () { this.getInitList(this.offset.toString(), this.limit.toString()); };
    ListComponent.prototype.getInitList = function (offset, limit) {
        var _this = this;
        this.lawService.getList(offset, limit)
            .subscribe(function (list) { _this.articles = list; _this.offset += _this.limit; }, function (error) { return _this.errorMessage = error; });
        console.log(this.articles);
    };
    ListComponent.prototype.open = function () {
        var _this = this;
        console.log(this.offset);
        this.lawService.getList(this.offset.toString(), this.limit.toString())
            .subscribe(function (list) { _this.articles = _this.articles.concat(list); _this.offset += _this.limit; }, function (error) { return _this.errorMessage = error; });
        console.log(this.articles);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFHbEQsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiw0QkFBaUMsZUFBZSxDQUFDLENBQUE7QUFRakQ7SUFRSSx1QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0NBQVEsR0FBUixjQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9FLG1DQUFXLEdBQVgsVUFBWSxNQUFjLEVBQUUsS0FBYTtRQUF6QyxpQkFRQztRQU5FLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7YUFDM0IsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFLLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBQyxFQUN6RCxVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLDRCQUFJLEdBQVg7UUFBQSxpQkFPQztRQU5HLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1RCxTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUssS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQSxDQUFBLENBQUMsRUFDL0UsVUFBQSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFyQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsU0FBUyxFQUFFLENBQUUsd0JBQVUsQ0FBRTtTQUM1QixDQUFDOztxQkFBQTtJQWtDRixvQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1kscUJBQWEsZ0JBaUN6QixDQUFBIiwiZmlsZSI6ImFwcC5saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IExhd1NlcnZpY2UgfSAgICAgICBmcm9tICcuL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7IEFydGljbGUgfSAgICAgICBmcm9tICcuL2FydGljbGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnL2pzL2FwcC5saXN0Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogWyBMYXdTZXJ2aWNlIF0sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIGFydGljbGVzIDogQXJ0aWNsZVtdO1xuICAgIG5fYXJ0aWNsZXMgOiBBcnRpY2xlW107XG4gICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgbGltaXQ6IG51bWJlcjtcbiAgICByZXN1bHQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhd1NlcnZpY2U6IExhd1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmxpbWl0ID0gMTY7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IHRoaXMuZ2V0SW5pdExpc3QodGhpcy5vZmZzZXQudG9TdHJpbmcoKSwgdGhpcy5saW1pdC50b1N0cmluZygpKTsgfVxuXG4gICAgZ2V0SW5pdExpc3Qob2Zmc2V0OiBzdHJpbmcsIGxpbWl0OiBzdHJpbmcpIHtcblxuICAgICAgIHRoaXMubGF3U2VydmljZS5nZXRMaXN0KG9mZnNldCwgbGltaXQpXG4gICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgbGlzdCA9PiB7dGhpcy5hcnRpY2xlcyA9IGxpc3Q7IHRoaXMub2Zmc2V0ICs9IHRoaXMubGltaXR9LFxuICAgICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnRpY2xlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2Zmc2V0KTtcbiAgICAgICAgdGhpcy5sYXdTZXJ2aWNlLmdldExpc3QodGhpcy5vZmZzZXQudG9TdHJpbmcoKSwgdGhpcy5saW1pdC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgIGxpc3QgPT4ge3RoaXMuYXJ0aWNsZXMgPSB0aGlzLmFydGljbGVzLmNvbmNhdChsaXN0KTsgdGhpcy5vZmZzZXQgKz0gdGhpcy5saW1pdH0sXG4gICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJ0aWNsZXMpO1xuICAgIH1cbn1cbiJdfQ==
