import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { personajes } from '../modelo/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = environment.url;
  constructor(public http:HttpClient) { }

  getCharacter():Observable<personajes>{
    return this.http.get<personajes>(this.url)
  }
}
