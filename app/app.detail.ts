import { Component } from '@angular/core';

import { LawService }       from './app.service';
import { Article }       from './article';
import { Lawyer } from './lawyer';
import { ResultSet } from './resultSet';

@Component({
    moduleId: module.id,
    templateUrl: '/js/app.detail.html',
    providers: [ LawService ],
})
export class DetailComponent {
    article = new Article(null, '', '', '', '', null);
    lawyer = new Lawyer('', '');
    answers = new Array();
    errorMessage: string;

    constructor(private lawService: LawService) {
    }

    onTitle(event: any) {
        this.article.title = event.target.value;
        console.log(this.article.title);
    }

    onBody(event:any) {
        this.article.body = event.target.value;
        console.log(this.article.body);
    }

    onAnswerTitle(event: any) {
        this.lawyer.lawyer = event.target.value;
        console.log(this.lawyer.lawyer);
    }

    onAnswerBody(event:any) {
        this.lawyer.body = event.target.value;
        console.log(this.lawyer.body);
    }

    public post() {
        this.answers.push(this.lawyer);
        this.article.setAnswers(this.answers);

        this.lawService.postQna(this.article)
                     .subscribe(
                       data  => {
                           if(data.code == 200)
                               location.href="/";
                       },
                       error =>  this.errorMessage = <any>error);

        console.log(this.article);
        console.log(this.article.answers[0].lawyer);
    }
}
