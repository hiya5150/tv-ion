import { Component } from '@angular/core';
import {Show} from '../models/show';
import {TvmazeService} from '../models/tvmaze.service';
import {ActivatedRoute} from '@angular/router';
import {Episode} from '../models/episode';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.page.html',
  styleUrls: ['./show-details.page.scss'],
})
export class ShowDetailsPage {
  show: Show;
  sid: string;

  constructor(public tvmaze: TvmazeService,
              public route: ActivatedRoute) {

    this.route.paramMap
        .subscribe(pm => {
          this.sid = pm.get('sid');
          this.fetchShow();
        });

  }

  fetchShow(): void {
    this.tvmaze.fetchShow(this.sid)
        .subscribe(resultingShow => {
              this.show = resultingShow;
              this.tvmaze.fetchEpisodes(this.show.id)
                  .subscribe(
                      (episodes: Episode[]) => {
                        this.show.addEpisodes(episodes);
                      });

            }
        );
  }
}


