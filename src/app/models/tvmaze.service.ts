import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Show} from './show';
import {Episode} from './episode';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  base = 'https://api.tvmaze.com';
  constructor(private http: HttpClient) {}

  fetchShows(query: string): Observable<Show[]> {
    const url = this.base + '/search/shows?q=' + query;
    return this.http.get(url).pipe(
        map( res => {
          return (res as any[]).map(item => new Show(item.show));
        })
    );
  }

  fetchShow(showID: string): Observable<Show> {
    const url = this.base + '/shows/' + showID;
    return this.http.get(url)
        .pipe(
            map(res => new Show(res))
        );
  }

  fetchEpisodes(showID: number): Observable<Episode[]> {
    const url = this.base + '/shows/' + showID + '/episodes';
    return this.http.get(url).pipe(
        map(res => {
          return (res as any[]).map(item => new Episode(item));
        })
    );
  }

  fetchEpisodeByURL(url: string): Observable<Episode> {
    return this.http.get(url).pipe(map(res => {
      return new Episode(res);
    }));
  }
}
