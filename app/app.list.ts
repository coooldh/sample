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
    n_articles : Article[];
    offset: number;
    limit: number;
    result : string;

    constructor(private lawService: LawService) {
        this.offset = 0;
        this.limit = 16;
    }

    ngOnInit() { this.getInitList(this.offset.toString(), this.limit.toString()); }

    getInitList(offset: string, limit: string) {

       this.lawService.getList(offset, limit)
                 .subscribe(
                   list => {this.articles = list; this.offset += this.limit},
                   error =>  this.errorMessage = <any>error);

          console.log(this.articles);
    }

    public open() {
        console.log(this.offset);
        this.lawService.getList(this.offset.toString(), this.limit.toString())
                 .subscribe(
                   list => {this.articles = this.articles.concat(list); this.offset += this.limit},
                   error =>  this.errorMessage = <any>error);
        console.log(this.articles);
    }
}
