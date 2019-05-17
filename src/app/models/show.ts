import {Episode} from './episode';
import * as _ from 'lodash';

export class Show {
    name: string;
    id: number;
    status: string;
    premiered: string;
    runtime: number;
    summary: string;
    image: string;
    lastEp: Episode;
    nextEp: Episode;
    lastEpLink: string;
    nextEpLink: string;
    episodes: Episode[][];

    constructor(a?) {
        if (a) {
            this.name = a.name;
            this.id = a.id;
            this.status = a.status;
            this.premiered = a.premiered;
            this.runtime = a.runtime;
            this.summary = a.summary;
            this.image = (a.image) ? a.image.original : null;
            if (this.image) {
                this.image = 'https' + this.image.substring(4);
            }
            if (a._links) {
                this.lastEpLink = (a._links.previousepisode) ? a._links.previousepisode.href : null;
                if (this.lastEpLink) {
                    this.lastEpLink = 'https' + this.lastEpLink.substring(4);
                }
                this.nextEpLink = (a._links.nextepisode) ? a._links.nextepisode.href : null;
                if (this.nextEpLink) {
                    this.nextEpLink = 'https' + this.nextEpLink.substring(4);
                }
            }
        }
    }

    // Take an array of objects and sort them by season.
    addEpisodes(unsorted: Episode[]): void {
        this.episodes = [];
        const temp = _.groupBy(unsorted, (o) => o.season);
        _.forOwn(temp, (key, val) => {
            this.episodes.push(temp[val]);
        });

    }
}
