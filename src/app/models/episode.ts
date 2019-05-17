export class Episode {
    id: number;
    name: string;
    season: number;
    episode: number;
    airDate: string;
    airTime: string;
    summary: string;
    image: string;

    constructor(a?) {
        if (a) {
            this.id = a.id;
            this.name = a.name;
            this.season = a.season;
            this.episode = a.number;
            this.airDate = a.airdate;
            this.airTime = a.airtime;
            this.summary = a.summary;
            this.image = (a.image) ? a.image.original : null;
            if (this.image) {
                this.image = 'https' + this.image.substring(4);
            }
        }
    }
}
