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
var app_service_1 = require('./app.service');
var article_1 = require('./article');
var lawyer_1 = require('./lawyer');
var DetailComponent = (function () {
    function DetailComponent(lawService) {
        this.lawService = lawService;
        this.article = new article_1.Article(null, '', '', '', '', null);
        this.lawyer = new lawyer_1.Lawyer('', '');
        this.answers = new Array();
    }
    DetailComponent.prototype.onTitle = function (event) {
        this.article.title = event.target.value;
        console.log(this.article.title);
    };
    DetailComponent.prototype.onBody = function (event) {
        this.article.body = event.target.value;
        console.log(this.article.body);
    };
    DetailComponent.prototype.onAnswerTitle = function (event) {
        this.lawyer.lawyer = event.target.value;
        console.log(this.lawyer.lawyer);
    };
    DetailComponent.prototype.onAnswerBody = function (event) {
        this.lawyer.body = event.target.value;
        console.log(this.lawyer.body);
    };
    DetailComponent.prototype.post = function () {
        var _this = this;
        this.answers.push(this.lawyer);
        this.article.setAnswers(this.answers);
        this.lawService.postQna(this.article)
            .subscribe(function (data) {
            if (data.code == 200)
                location.href = "/";
        }, function (error) { return _this.errorMessage = error; });
        console.log(this.article);
        console.log(this.article.answers[0].lawyer);
    };
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '/js/app.detail.html',
            providers: [app_service_1.LawService],
        }), 
        __metadata('design:paramtypes', [app_service_1.LawService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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WSx1QkFBZSxrQkE0QzNCLENBQUEiLCJmaWxlIjoiYXBwLmRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMYXdTZXJ2aWNlIH0gICAgICAgZnJvbSAnLi9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBBcnRpY2xlIH0gICAgICAgZnJvbSAnLi9hcnRpY2xlJztcbmltcG9ydCB7IExhd3llciB9IGZyb20gJy4vbGF3eWVyJztcbmltcG9ydCB7IFJlc3VsdFNldCB9IGZyb20gJy4vcmVzdWx0U2V0JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy9qcy9hcHAuZGV0YWlsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogWyBMYXdTZXJ2aWNlIF0sXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbENvbXBvbmVudCB7XG4gICAgYXJ0aWNsZSA9IG5ldyBBcnRpY2xlKG51bGwsICcnLCAnJywgJycsICcnLCBudWxsKTtcbiAgICBsYXd5ZXIgPSBuZXcgTGF3eWVyKCcnLCAnJyk7XG4gICAgYW5zd2VycyA9IG5ldyBBcnJheSgpO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsYXdTZXJ2aWNlOiBMYXdTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgb25UaXRsZShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuYXJ0aWNsZS50aXRsZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnRpY2xlLnRpdGxlKTtcbiAgICB9XG5cbiAgICBvbkJvZHkoZXZlbnQ6YW55KSB7XG4gICAgICAgIHRoaXMuYXJ0aWNsZS5ib2R5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFydGljbGUuYm9keSk7XG4gICAgfVxuXG4gICAgb25BbnN3ZXJUaXRsZShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMubGF3eWVyLmxhd3llciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYXd5ZXIubGF3eWVyKTtcbiAgICB9XG5cbiAgICBvbkFuc3dlckJvZHkoZXZlbnQ6YW55KSB7XG4gICAgICAgIHRoaXMubGF3eWVyLmJvZHkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGF3eWVyLmJvZHkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0KCkge1xuICAgICAgICB0aGlzLmFuc3dlcnMucHVzaCh0aGlzLmxhd3llcik7XG4gICAgICAgIHRoaXMuYXJ0aWNsZS5zZXRBbnN3ZXJzKHRoaXMuYW5zd2Vycyk7XG5cbiAgICAgICAgdGhpcy5sYXdTZXJ2aWNlLnBvc3RRbmEodGhpcy5hcnRpY2xlKVxuICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlID09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmPVwiL1wiO1xuICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFydGljbGUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFydGljbGUuYW5zd2Vyc1swXS5sYXd5ZXIpO1xuICAgIH1cbn1cbiJdfQ==
