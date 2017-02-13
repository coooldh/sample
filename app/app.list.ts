import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { LawService }       from './app.service';
import { Article }       from './article';

@Component({
    moduleId: module.id,
    templateUrl: '/js/app.list.html',
    providers: [ LawService ],
})
export class ListComponent implements OnInit {
    errorMessage: string;
    articles : Article[];
    article : Article;
    result : string;

    constructor(private lawService: LawService) {
    }

    ngOnInit() { this.getInitList("0"); }

    getInitList(offset: string) {

       this.lawService.getList(offset)
                 .subscribe(
                   list => this.articles = list,
                   error =>  this.errorMessage = <any>error);

          console.log(this.articles);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
      }
}
