
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShowDetailsPage } from './show-details.page';
import {EpisodeNumberPrettierPipe} from '../pipes/episode-number-prettier.pipe';

const routes: Routes = [
  {
    path: '',
    component: ShowDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowDetailsPage, EpisodeNumberPrettierPipe]
})
export class ShowDetailsPageModule {}
