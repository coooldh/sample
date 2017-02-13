import { Lawyer } from './lawyer';
export class Article {
    constructor (
        public id: number,
        public title: string,
        public body: string,
        public createAt: string,
        public updatedAt: string,
        public answers: Lawyer[]
    ) {}
}
