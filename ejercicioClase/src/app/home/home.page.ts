import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servicio/service.service';
import { personajes } from '../modelo/pokemon';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  personajes : string[] = []
  
  constructor(private servicio: ServiceService) {}

  ngOnInit() {
    this.servicio.getCharacter().subscribe((lista:any) => this.personajes = lista);
  }

  nuevoPersonaje(event, url){
    this.servicio.getCharacter().subscribe((lista:any) => this.personajes = lista);
  }
}
