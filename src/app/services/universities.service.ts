import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UniversitiesService {
  constructor(private http: HttpClient) {}

  getUniversitiesBycountry(country: string = 'ukraine') {
    console.log('getUniversitiesBycountry' + country);
    return this.http.get(
      'http://universities.hipolabs.com/search?&country=' + country
    );
  }
}
