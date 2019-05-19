import {Component, Input, OnInit} from '@angular/core';
import {TvmazeService} from '../../models/tvmaze.service';
import {Show} from '../../models/show';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
@Input() term: string;
shows: Show[];
  constructor(public tvmaze: TvmazeService,
              public modalCtr: ModalController) { }

  ngOnInit() {
    this.tvmaze.fetchShows(this.term)
        .subscribe(results => {
          this.shows = results;
        });
  }
  async onClose() {
    await this.modalCtr.dismiss();
  }

}
