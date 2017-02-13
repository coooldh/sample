"use strict";
var Article = (function () {
    function Article(id, title, body, createAt, updatedAt, answers) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.createAt = createAt;
        this.updatedAt = updatedAt;
        this.answers = answers;
    }
    Article.prototype.setAnswers = function (answers) {
        this.answers = answers;
    };
    return Article;
}());
exports.Article = Article;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQ1csRUFBVSxFQUNWLEtBQWEsRUFDYixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBaUIsRUFDakIsT0FBaUI7UUFMakIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVU7SUFDekIsQ0FBQztJQUVHLDRCQUFVLEdBQWpCLFVBQWtCLE9BQWtCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxlQUFPLFVBYW5CLENBQUEiLCJmaWxlIjoiYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhd3llciB9IGZyb20gJy4vbGF3eWVyJztcbmV4cG9ydCBjbGFzcyBBcnRpY2xlIHtcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGJvZHk6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGNyZWF0ZUF0OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB1cGRhdGVkQXQ6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGFuc3dlcnM6IExhd3llcltdXG4gICAgKSB7fVxuXG4gICAgcHVibGljIHNldEFuc3dlcnMoYW5zd2VycyA6IExhd3llcltdKSB7XG4gICAgICAgIHRoaXMuYW5zd2VycyA9IGFuc3dlcnM7XG4gICAgfVxufVxuIl19
