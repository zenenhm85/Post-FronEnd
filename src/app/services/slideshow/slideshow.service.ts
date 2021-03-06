import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Ruta} from '../../config';

@Injectable({
  providedIn: 'root',
})
export class SlideshowService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = Ruta.url;
  }

  getSlideshow() {
    return this.http.get(`${this.url}/slide`);
  } 
}
