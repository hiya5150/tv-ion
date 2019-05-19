import { Component} from '@angular/core';
import { ModalController} from '@ionic/angular';
import {ResultsComponent} from './results/results.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
query; string;

  constructor(public modalController: ModalController) { }

  async onSearch() {
    if (this.query) {
      const modal = await this.modalController.create({
        component: ResultsComponent,
        componentProps: {
          term: this.query
        }
      });
      return await modal.present();
    }
  }


}
