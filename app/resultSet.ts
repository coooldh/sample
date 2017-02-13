import { Article } from './article';

export class ResultSet {
    constructor (
        public code: number,
        public article: Article
    ) {}
}
